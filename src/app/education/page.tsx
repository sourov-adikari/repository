import { getEducation } from "@/models/Education";
import { getSkillDetails } from "@/models/SkillDetail";
import { getProfessionalTraits } from "@/models/ProfessionalTrait";
import type { Education, Skill } from "@/types/portfolio";
import { EducationSection } from "@/components/EducationSection/EducationSection";

export default async function Page() {
  const [educationResult, skillsResult, traitsResult] = await Promise.allSettled([getEducation(), getSkillDetails(), getProfessionalTraits()]);
  const education = educationResult.status === "fulfilled" ? educationResult.value as Education[] : null;
  const skills = skillsResult.status === "fulfilled" ? skillsResult.value as Skill[] : [];
  const traits = traitsResult.status === "fulfilled" ? traitsResult.value.map((trait) => ({ id: trait.value, name: trait.value, category: "Professional Traits" })) as Skill[] : [];
  const allSkills = [...skills, ...traits];
  return <main className="w-full flex flex-col pt-28 min-h-screen">
    {education ? <section className="max-w-7xl mx-auto w-full"><div className="px-5 md:px-6 mb-3"><p className="text-xs font-bold uppercase tracking-[0.16em] text-primary mb-2">Background</p><h1 className="text-3xl md:text-5xl font-bold tracking-tight">Education & <span className="text-gradient-primary">Learning</span></h1></div><EducationSection education={education} skills={allSkills} /></section> : <p className="py-32 text-center">Unable to load education.</p>}
  </main>;
}
