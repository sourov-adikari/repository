import { errorResponse, rateLimit, respond } from "@/app/api/response";
import { getPrivacyPolicy } from "@/models/PrivacyPolicy";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const limited = rateLimit(request, "api", 100, 15 * 60 * 1000);
  if (limited) return limited;

  try {
    const privacyPolicy = await getPrivacyPolicy();
    if (!privacyPolicy) {
      return Response.json({ success: false, error: { code: "PRIVACY_POLICY_NOT_FOUND", message: "Privacy policy is unavailable." } }, { status: 404 });
    }
    return respond({ privacyPolicy }, 200, request);
  } catch (error) {
    return errorResponse(error, request);
  }
}
