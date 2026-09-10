import nodemailer from "nodemailer";
import { MongoServerError } from "mongodb";
import { getDatabase } from "@/lib/database";
import { emailConfig } from "@/lib/email";

export class ServiceError extends Error {
  constructor(public readonly status: number, message: string, public readonly code = "API_ERROR") {
    super(message);
  }
}

const escapeHtml = (value: string) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
const transporter = () => {
  if (!emailConfig.smtp.host || !emailConfig.smtp.user || !emailConfig.smtp.pass) throw new ServiceError(503, "Email service is unavailable", "EMAIL_SERVICE_UNAVAILABLE");
  return nodemailer.createTransport({ host: emailConfig.smtp.host, port: emailConfig.smtp.port, secure: emailConfig.smtp.secure, auth: { user: emailConfig.smtp.user, pass: emailConfig.smtp.pass } });
};

export const sendContactMessage = async (values: { name: string; email: string; subject: string; message: string }) => {
  try {
    await transporter().sendMail({
      from: emailConfig.smtp.user,
      to: emailConfig.contactEmail,
      replyTo: values.email,
      subject: values.subject,
      text: `Name: ${values.name}\nEmail: ${values.email}\nSubject: ${values.subject}\n\n${values.message}`,
      html: `<h2>Portfolio contact message</h2><p><strong>Name:</strong> ${escapeHtml(values.name)}</p><p><strong>Email:</strong> ${escapeHtml(values.email)}</p><p><strong>Subject:</strong> ${escapeHtml(values.subject)}</p><p>${escapeHtml(values.message).replaceAll("\n", "<br>")}</p>`,
    });
  } catch (error) {
    if (error instanceof ServiceError) throw error;
    console.error("Contact email delivery failed", error instanceof Error ? error.message : error);
    throw new ServiceError(502, "Unable to send message", "CONTACT_EMAIL_DELIVERY_FAILED");
  }
};

export const subscribeToNewsletter = async (email: string) => {
  const database = await getDatabase();
  const subscribers = database.collection<{ email: string; subscribedAt: Date; status: string }>("newsletter_subscribers");
  await subscribers.createIndex({ email: 1 }, { unique: true, name: "newsletter_email_unique" });
  if (await subscribers.findOne({ email })) return "already_subscribed" as const;
  try {
    await subscribers.insertOne({ email, subscribedAt: new Date(), status: "pending" });
  } catch (error) {
    if (error instanceof MongoServerError && error.code === 11000) return "already_subscribed" as const;
    throw new ServiceError(503, "Newsletter service is unavailable", "NEWSLETTER_DATABASE_UNAVAILABLE");
  }
  try {
    await transporter().sendMail({ from: emailConfig.smtp.user, to: email, subject: "You're subscribed to Sourov Adikari's newsletter", text: "Thanks for subscribing to Sourov Adikari's newsletter." });
  } catch (error) {
    await subscribers.updateOne({ email }, { $set: { status: "email_failed" } }).catch(() => undefined);
    if (error instanceof ServiceError) throw error;
    throw new ServiceError(502, "Unable to send subscription email", "NEWSLETTER_EMAIL_DELIVERY_FAILED");
  }
  await subscribers.updateOne({ email }, { $set: { status: "subscribed" } });
  return "subscribed" as const;
};

