import { errorResponse, rateLimit, respond } from "@/app/api/response";
import { getProjectBySlug } from "@/models/Project";
export const runtime = "nodejs";
export async function GET(request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const limited = rateLimit(request, "api", 100, 15 * 60 * 1000); if (limited) return limited;
  try { const slug = (await params).slug.trim(); if (!slug) return errorResponse(new Error("Project slug is required"), request); const project = await getProjectBySlug(slug); if (!project) return Response.json({ success: false, error: { code: "PROJECT_NOT_FOUND", message: "Project not found" } }, { status: 404 }); return respond({ project }, 200, request); } catch (error) { return errorResponse(error, request); }
}
