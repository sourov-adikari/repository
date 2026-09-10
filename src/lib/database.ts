import { MongoClient, type Db, type Document } from "mongodb";
const mongodbUri = process.env.MONGODB_URI ?? "";
const mongodbDatabase = process.env.MONGODB_DATABASE ?? "portfolio";

let clientPromise: Promise<MongoClient> | null = null;

const getClient = () => {
  if (!mongodbUri) throw new Error("MONGODB_URI is not configured");
  clientPromise ??= new MongoClient(mongodbUri, {
    serverSelectionTimeoutMS: 10000,
    connectTimeoutMS: 10000,
  }).connect();
  return clientPromise;
};

export const getDatabase = async (): Promise<Db> => (await getClient()).db(mongodbDatabase);

export const cleanDocument = <T extends Document>(document: T): Omit<T, "_id"> => {
  const clean = { ...document };
  Reflect.deleteProperty(clean, "_id");
  return clean as Omit<T, "_id">;
};
