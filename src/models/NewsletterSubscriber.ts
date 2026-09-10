import { cleanDocument, getDatabase } from "@/lib/database";

export type NewsletterSubscriberStatus = "pending" | "subscribed" | "email_failed" | (string & {});
export type NewsletterSubscriber = { email: string; subscribedAt: Date; status: NewsletterSubscriberStatus };

export const isValidNewsletterSubscriberEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

const collectionName = "newsletter_subscribers";

export const getNewsletterSubscriber = async (email: string) => {
  const value = await (await getDatabase()).collection<NewsletterSubscriber>(collectionName).findOne({ email });
  return value ? cleanDocument(value) : null;
};
