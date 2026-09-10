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

const initialPrivacyPolicy: PrivacyPolicyDocument = {
  key: "main",
  title: "Privacy Policy",
  lastUpdated: "September 10, 2026",
  sections: [
    {
      heading: "Information collected",
      body: "When you use the contact form, the submitted name, email address, subject, and message are collected. Newsletter subscriptions collect your email address and subscription status.",
    },
    {
      heading: "How information is used",
      body: "Contact details are used to respond to your inquiry. Newsletter email addresses are used to send portfolio updates and related development news. Information is not sold or used for unrelated advertising.",
    },
    {
      heading: "Storage and retention",
      body: "Submitted information is stored in the portfolio application database and, where necessary, processed through the configured email delivery provider. Data is retained only as long as reasonably needed for communication, subscription management, and operational records.",
    },
    {
      heading: "Your choices",
      body: "You may request access to or deletion of information you submitted by contacting contact@sourovadikari.xyz. You can also request that newsletter communications stop.",
    },
  ],
};

export const seedPrivacyPolicy = async () => {
  const collection = (await getDatabase()).collection<PrivacyPolicyDocument>(collectionName);
  await collection.createIndex({ key: 1 }, { unique: true, name: "privacy_policy_key_unique" });
  await collection.updateOne({ key: "main" }, { $setOnInsert: initialPrivacyPolicy }, { upsert: true });
};

export const getPrivacyPolicy = async () => {
  await seedPrivacyPolicy();
  const policy = await (await getDatabase()).collection<PrivacyPolicyDocument>(collectionName).findOne({ key: "main" });
  return policy ? cleanDocument(policy) : null;
};
