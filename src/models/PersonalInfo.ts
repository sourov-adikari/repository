import { cleanDocument, getDatabase } from "@/lib/database";

export type PersonalInfoDocument = {
  key: "main" | string;
  about: string;
  careerGoal: string;
  email: string;
  experienceLabel: string;
  experiencePeriod: string;
  location: string;
  name: string;
  phone: string;
  title: string;
};

const collectionName = "personal_info";

export const getPersonalInfo = async () => {
  const value = await (await getDatabase()).collection<PersonalInfoDocument>(collectionName).findOne({ key: "main" });
  if (!value) throw new Error("MongoDB collection 'personal_info' has not been migrated");
  return cleanDocument(value);
};
