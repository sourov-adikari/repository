import { cleanDocument, getDatabase } from "@/lib/database";

export type SkillDetailDocument = {
  key: string;
  category: string;
  focus: string;
  name: string;
  order: number;
  progress: number;
};

export const isValidSkillProgress = (progress: number) => Number.isFinite(progress) && progress >= 0 && progress <= 100;

const collectionName = "skill_details";

export const getSkillDetails = async () => {
  const values = await (await getDatabase()).collection<SkillDetailDocument>(collectionName).find({}).sort({ order: 1 }).toArray();
  return values.map(cleanDocument);
};
