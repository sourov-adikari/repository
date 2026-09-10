import { errorResponse, rateLimit, respond } from "@/app/api/response";
import { getTestimonials } from "@/models/Testimonial";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const limited = rateLimit(request, "api", 100, 15 * 60 * 1000);
  if (limited) return limited;
  try {
    return respond({ testimonials: await getTestimonials() }, 200, request);
  } catch (error) {
    return errorResponse(error, request);
  }
}
