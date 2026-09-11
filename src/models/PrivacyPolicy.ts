import { cleanDocument, getDatabase } from "@/lib/database";

export type PrivacyPolicySection = {
    heading: string;
    body: string;
};

export type PrivacyPolicyDocument = {
    key: "main";
    title: string;
    lastUpdated: string;
    sections: PrivacyPolicySection[];
};

const collectionName = "privacy_policy";

export async function getPrivacyPolicy() {
    const database = await getDatabase();

    const collection = database.collection<PrivacyPolicyDocument>(collectionName);

    const policy = await collection.findOne({
        key: "main",
    });

    return policy ? cleanDocument(policy) : null;
}