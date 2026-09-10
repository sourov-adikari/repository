import { cleanDocument, getDatabase } from "@/lib/database";

export type ProfessionalTraitDocument = {
  key: string;
  order: number;
  value: string;
};

const collectionName = "professional_traits";

export const getProfessionalTraits = async () => {
  const values = await (await getDatabase()).collection<ProfessionalTraitDocument>(collectionName).find({}).sort({ order: 1 }).toArray();
  return values.map(cleanDocument);
};
