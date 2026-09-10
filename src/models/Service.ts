import { cleanDocument, getDatabase } from "@/lib/database";

export type ServiceDocument = {
  key: string;
  description: string;
  focus: string[];
  order: number;
  title: string;
};

const collectionName = "services";

export const getServices = async () => {
  const services = await (await getDatabase()).collection<ServiceDocument>(collectionName).find({}).sort({ order: 1 }).toArray();
  return services.map(cleanDocument);
};
