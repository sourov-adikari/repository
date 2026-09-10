import { errorResponse, rateLimit, respond } from "@/app/api/response";
import { getPersonalInfo } from "@/models/PersonalInfo";
import { getProfileDetails } from "@/models/Profile";
import { getSkills } from "@/models/Skill";
import { getSkillDetails } from "@/models/SkillDetail";
import { getProfessionalTraits } from "@/models/ProfessionalTrait";
import { getProjects, getFeaturedProjects } from "@/models/Project";
import { getExperience } from "@/models/Experience";
import { getEducation } from "@/models/Education";
import { getLanguages } from "@/models/Language";
import { getSocials } from "@/models/Social";
import { getServices } from "@/models/Service";

export const runtime = "nodejs";
export async function GET(request: Request) {
  const limited = rateLimit(request, "api", 100, 15 * 60 * 1000);
  if (limited) return limited;
  try {
    const [personalInfo, profileDetails, skills, skillDetails, professionalTraits, experience, education, languages, socials, services, projects, featuredProjects] = await Promise.all([
      getPersonalInfo(), getProfileDetails(), getSkills(), getSkillDetails(), getProfessionalTraits(), getExperience(), getEducation(), getLanguages(), getSocials(), getServices(), getProjects(), getFeaturedProjects(),
    ]);
    return respond({ personalInfo, profileDetails, skills, skillDetails, professionalTraits, experience, education, languages, socials, services, projects, featuredProjects }, 200, request);
  } catch (error) { return errorResponse(error, request); }
}
