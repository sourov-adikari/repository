import { errorResponse, rateLimit, respond } from "@/app/api/response";
import { getSkills } from "@/models/Skill";
import { getSkillDetails } from "@/models/SkillDetail";
import { getProfessionalTraits } from "@/models/ProfessionalTrait";
export const runtime = "nodejs";
export async function GET(request: Request) { const limited = rateLimit(request, "api", 100, 900000); if (limited) return limited; try { const [skills, skillDetails, professionalTraits] = await Promise.all([getSkills(), getSkillDetails(), getProfessionalTraits()]); return respond({ skills, skillDetails, professionalTraits: professionalTraits.map((trait) => trait.value) }, 200, request); } catch (error) { return errorResponse(error, request); } }
