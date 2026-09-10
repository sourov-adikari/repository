import { cleanDocument, getDatabase } from "@/lib/database";

export type ProjectDocument = {
  id: string;
  category: string;
  description: string;
  featured: boolean;
  features: string[];
  githubUrl: string;
  highlights: string[];
  image: string;
  lessons: string[];
  liveUrl: string;
  longDescription: string;
  purpose: string;
  screenshots: string[];
  slug: string;
  solution: string;
  status: string;
  technologies: string[];
  title: string;
  year: number;
};

export type ProjectResult = ProjectDocument & { name?: string; subtitle?: string };

const collectionName = "projects";

export const getProjects = async () => {
  const projects = await (await getDatabase()).collection<ProjectDocument>(collectionName).find({}).sort({ year: -1, title: 1 }).toArray();
  return projects.map(cleanDocument) as ProjectResult[];
};

export const getFeaturedProjects = async () => {
  const projects = await (await getDatabase()).collection<ProjectDocument>(collectionName).find({ featured: true }).sort({ year: -1, title: 1 }).toArray();
  return projects.map(cleanDocument) as ProjectResult[];
};

export const getProjectBySlug = async (slug: string) => {
  const project = await (await getDatabase()).collection<ProjectDocument>(collectionName).findOne({ slug });
  return project ? cleanDocument(project) as ProjectResult : null;
};
