import { z } from "zod";

const emailSchema = z.string().trim().email("Enter a valid email address.");

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your name.").max(100, "Name is too long."),
  email: emailSchema,
  subject: z.string().trim().min(3, "Enter a subject.").max(160, "Subject is too long."),
  message: z.string().trim().min(10, "Tell me a little more about your project.").max(5000, "Message is too long."),
});

export const newsletterSchema = z.object({
  email: emailSchema,
});

export type ContactFormValues = z.infer<typeof contactSchema>;