import { cleanDocument, getDatabase } from "@/lib/database";

export type ExperienceDocument = {
  key: string;
  achievement: string;
  description: string;
  order: number;
  period: string;
  responsibilities: string[];
  role: string;
  technologies: string[];
};

const collectionName = "experience";

export const getExperience = async () => {
  const entries = await (await getDatabase()).collection<ExperienceDocument>(collectionName).find({}).sort({ order: 1 }).toArray();
  return entries.map(cleanDocument);
};
