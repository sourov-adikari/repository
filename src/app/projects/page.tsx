import { getProjects } from "@/models/Project";
import type { Project } from "@/types/portfolio";
import { ProjectsSection } from "@/components/ProjectsSection/ProjectsSection";

export default async function Page() {
  const result = await getProjects().then((value) => value as Project[]).catch(() => null);
  return <main className="w-full flex flex-col pt-28 min-h-screen">
    {result ? <ProjectsSection projects={result} /> : <p className="py-32 text-center">Unable to load projects.</p>}
  </main>;
}
