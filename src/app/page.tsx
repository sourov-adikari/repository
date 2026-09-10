import { getPersonalInfo } from "@/models/PersonalInfo";
import { getProjects } from "@/models/Project";
import { getSocials } from "@/models/Social";
import { getTestimonials } from "@/models/Testimonial";
import type { Portfolio, Project, Social, Testimonial } from "@/types/portfolio";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { AboutSection } from "@/components/AboutSection/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection/TestimonialsSection";

export default async function Page() {
  const [portfolioResult, projectsResult, socialsResult, testimonialsResult] = await Promise.allSettled([
    getPersonalInfo(), getProjects(), getSocials(), getTestimonials(),
  ]);
  const portfolio = portfolioResult.status === "fulfilled" ? portfolioResult.value as Portfolio : null;
  const projects = projectsResult.status === "fulfilled" ? projectsResult.value as Project[] : null;
  const socials = socialsResult.status === "fulfilled" ? socialsResult.value as Social[] : [];
  const testimonials = testimonialsResult.status === "fulfilled" ? testimonialsResult.value as Testimonial[] : [];
  const experienceYears = Math.max(1, new Date().getFullYear() - 2023);

  return (
    <main className="w-full flex flex-col border-none">
      {portfolio ? <>
        <HeroSection portfolio={{ ...portfolio, projectCount: projects?.length ?? 0, experienceYears }} socials={socials} projectCount={projects?.length ?? 0} experienceYears={experienceYears} />
        <AboutSection portfolio={{ ...portfolio, projectCount: projects?.length ?? 0, experienceYears } as Portfolio} showImage={false} />
      </> : <section className="mx-auto flex min-h-[55vh] w-full max-w-2xl flex-col items-center justify-center px-6 pt-28 text-center" role="alert">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Portfolio unavailable</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground">The profile could not be loaded.</h1>
        <p className="mt-3 max-w-md text-muted-foreground">Please try again shortly. The portfolio service may be temporarily unavailable.</p>
      </section>}
      {projects ? <ProjectsSection projects={projects} limit={4} /> : <section className="mx-auto w-full max-w-2xl px-6 py-16 text-center" role="status"><p className="text-muted-foreground">Projects are temporarily unavailable.</p></section>}
      <TestimonialsSection testimonials={testimonials} />
      </main>
  );
}
