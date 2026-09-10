import { contactSchema } from "@/lib/validation";
import { badRequest, errorResponse, rateLimit, respond } from "@/app/api/response";
import { sendContactMessage } from "@/lib/mail";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const globalLimit = rateLimit(request, "api", 100, 15 * 60 * 1000);
  if (globalLimit) return globalLimit;
  const limited = rateLimit(request, "contact", 1, 30_000);
  if (limited) return limited;
  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return badRequest("Please check the form fields and try again.", parsed.error.flatten().fieldErrors, request);
  }

  try {
    await sendContactMessage(parsed.data);
    return respond({ message: "Message sent successfully" }, 200, request);
  } catch (error) {
    return errorResponse(error, request);
  }
}