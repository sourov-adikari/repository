import { getPersonalInfo } from "@/models/PersonalInfo";
import { ContactSection } from "@/components/ContactSection/ContactSection";

export default async function Page() {
  const portfolio = await getPersonalInfo().catch(() => null);
  return <main className="w-full flex flex-col pt-28 min-h-screen">
    {portfolio ? <ContactSection portfolio={portfolio} /> : <p className="py-32 text-center">Unable to load contact.</p>}
  </main>;
}
