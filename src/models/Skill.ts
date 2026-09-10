import { cleanDocument, getDatabase } from "@/lib/database";

export type SkillDocument = {
  key: string;
  category: string;
  items: string[];
  order: number;
};

const collectionName = "skills";

export const getSkills = async () => {
  const values = await (await getDatabase()).collection<SkillDocument>(collectionName).find({}).sort({ order: 1 }).toArray();
  return values.map(cleanDocument);
};
