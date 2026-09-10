import { errorResponse, rateLimit, respond } from "@/app/api/response";
import { getExperience } from "@/models/Experience";
export const runtime = "nodejs";
export async function GET(request: Request) { const limited = rateLimit(request, "api", 100, 900000); if (limited) return limited; try { return respond({ experience: await getExperience() }, 200, request); } catch (error) { return errorResponse(error, request); } }
