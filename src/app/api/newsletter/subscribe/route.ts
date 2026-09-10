import { newsletterSchema } from "@/lib/validation";
import { badRequest, errorResponse, rateLimit, respond } from "@/app/api/response";
import { subscribeToNewsletter } from "@/lib/mail";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const globalLimit = rateLimit(request, "api", 100, 15 * 60 * 1000);
  if (globalLimit) return globalLimit;
  const limited = rateLimit(request, "newsletter", 3, 60_000);
  if (limited) return limited;
  const body = await request.json().catch(() => null);
  const parsed = newsletterSchema.safeParse(body);

  if (!parsed.success) {
    return badRequest("Enter a valid email address.", undefined, request);
  }

  try {
    const status = await subscribeToNewsletter(parsed.data.email.toLowerCase());
    const message = status === "already_subscribed" ? "You are already subscribed" : "Subscription successful";
    return respond({ message, status }, 200, request);
  } catch (error) {
    return errorResponse(error, request);
  }
}