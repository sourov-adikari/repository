import { errorResponse, rateLimit, respond } from "@/app/api/response";
import { getLanguages } from "@/models/Language";
export const runtime = "nodejs";
export async function GET(request: Request) { const limited = rateLimit(request, "api", 100, 900000); if (limited) return limited; try { return respond({ languages: await getLanguages() }, 200, request); } catch (error) { return errorResponse(error, request); } }
