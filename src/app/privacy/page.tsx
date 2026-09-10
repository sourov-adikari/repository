import type { Metadata } from "next";
import type { PrivacyPolicyDocument } from "@/models/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy — Sourov Chandra Adikari",
  description: "Privacy information for visitors who contact Sourov Chandra Adikari or subscribe to portfolio updates.",
  alternates: { canonical: "https://sourovadikari.xyz/privacy" },
  robots: { index: true, follow: true },
};

const getSiteOrigin = () => {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
};

async function loadPrivacyPolicy(): Promise<PrivacyPolicyDocument | null> {
  try {
    const response = await fetch(`${getSiteOrigin()}/api/privacy-policy`, { cache: "no-store" });
    if (!response.ok) return null;
    const payload = await response.json() as { privacyPolicy?: PrivacyPolicyDocument };
    return payload.privacyPolicy ?? null;
  } catch {
    return null;
  }
}

function renderBody(body: string) {
  const email = "contact@sourovadikari.xyz";
  const parts = body.split(email);
  if (parts.length === 1) return body;
  return <>{parts[0]}<a className="text-primary hover:underline" href={`mailto:${email}`}>{email}</a>{parts.slice(1).join(email)}</>;
}

export default async function PrivacyPage() {
  const policy = await loadPrivacyPolicy();

  if (!policy) {
    return <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col items-center justify-center px-6 pb-20 pt-36 text-center" role="alert"><p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Privacy</p><h1 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">Privacy Policy unavailable</h1><p className="mt-4 text-sm leading-7 text-muted-foreground">Please try again later. The policy content could not be loaded.</p></main>;
  }

  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl px-6 pb-20 pt-36">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Privacy</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">{policy.title}</h1>
      <p className="mt-4 text-sm text-muted-foreground">Last updated: {policy.lastUpdated}</p>
      {policy.sections.length === 0 ? <p className="mt-10 rounded-2xl border border-foreground/10 bg-card/70 px-6 py-10 text-center text-sm text-muted-foreground">Privacy policy details are not available right now.</p> : <div className="mt-10 space-y-8 text-sm leading-7 text-muted-foreground">{policy.sections.map((section) => <section key={section.heading}><h2 className="text-lg font-semibold text-foreground">{section.heading}</h2><p className="mt-2">{renderBody(section.body)}</p></section>)}</div>}
    </main>
  );
}
