import { errorResponse, rateLimit, respond } from "@/app/api/response";
import { getProjects, getFeaturedProjects } from "@/models/Project";
export const runtime = "nodejs";
export async function GET(request: Request) {
  const limited = rateLimit(request, "api", 100, 15 * 60 * 1000); if (limited) return limited;
  try { const [projects, featuredProjects] = await Promise.all([getProjects(), getFeaturedProjects()]); return respond({ projects, featuredProjects }, 200, request); } catch (error) { return errorResponse(error, request); }
}
