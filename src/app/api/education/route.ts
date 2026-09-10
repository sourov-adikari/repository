import { errorResponse, rateLimit, respond } from "@/app/api/response";
import { getEducation } from "@/models/Education";
export const runtime = "nodejs";
export async function GET(request: Request) { const limited = rateLimit(request, "api", 100, 900000); if (limited) return limited; try { return respond({ education: await getEducation() }, 200, request); } catch (error) { return errorResponse(error, request); } }
