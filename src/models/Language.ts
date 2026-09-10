import { cleanDocument, getDatabase } from "@/lib/database";

export type LanguageDocument = {
  key: string;
  language: string;
  level: string;
  order: number;
};

export type LanguageResult = LanguageDocument & { name: string };

const collectionName = "languages";

export const getLanguages = async () => {
  const languages = await (await getDatabase()).collection<LanguageDocument>(collectionName).find({}).sort({ order: 1 }).toArray();
  return languages.map((language) => ({ ...cleanDocument(language), name: language.language })) as LanguageResult[];
};
