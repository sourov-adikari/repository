import { getProjectBySlug } from "@/models/Project";
import type { Project } from "@/types/portfolio";
import ProjectDetails from "@/components/projects/ProjectDetails";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug).then((value) => value as Project | null).catch((): Project | null => null);
  if (!project) notFound();

  return <ProjectDetails project={project} />;
}
