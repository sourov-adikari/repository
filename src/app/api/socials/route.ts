import { errorResponse, rateLimit, respond } from "@/app/api/response";
import { getSocials } from "@/models/Social";
export const runtime = "nodejs";
export async function GET(request: Request) { const limited = rateLimit(request, "api", 100, 900000); if (limited) return limited; try { return respond({ socials: await getSocials() }, 200, request); } catch (error) { return errorResponse(error, request); } }
