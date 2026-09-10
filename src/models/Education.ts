import { cleanDocument, getDatabase } from "@/lib/database";

export type EducationDocument = {
  key: string;
  detail: string;
  focus: string;
  order: number;
  period: string;
  school: string;
  title: string;
};

const collectionName = "education";

export const getEducation = async () => {
  const entries = await (await getDatabase()).collection<EducationDocument>(collectionName).find({}).sort({ order: 1 }).toArray();
  return entries.map(cleanDocument);
};
