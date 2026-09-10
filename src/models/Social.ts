import { cleanDocument, getDatabase } from "@/lib/database";

export type SocialDocument = {
  key: string;
  href: string;
  icon: string;
  label: string;
  order: number;
};

export type SocialResult = SocialDocument & { url: string; name: string; platform: string };

const collectionName = "socials";

export const getSocials = async () => {
  const socials = await (await getDatabase()).collection<SocialDocument>(collectionName).find({}).sort({ order: 1 }).toArray();
  return socials.map((social) => ({ ...cleanDocument(social), url: social.href, name: social.label, platform: social.label })) as SocialResult[];
};
