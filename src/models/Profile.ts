import { cleanDocument, getDatabase } from "@/lib/database";

export type ProfileDocument = {
  key: "main" | string;
  availability: string;
  focusAreas: string[];
  headline: string;
  summary: string;
  workStyle: string[];
};

const collectionName = "profile";

export const getProfileDetails = async () => {
  const value = await (await getDatabase()).collection<ProfileDocument>(collectionName).findOne({ key: "main" });
  if (!value) throw new Error("MongoDB collection 'profile' has not been migrated");
  return cleanDocument(value);
};
