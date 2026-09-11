import type { Metadata, Viewport } from "next";
import { Suspense, type ReactNode } from "react";
import "@fontsource/geist-sans/400.css";
import "@fontsource/geist-sans/700.css";
import "./globals.css";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { SmoothScroll } from "@/components/SmoothScroll/SmoothScroll";
import { ThemeProvider } from "@/components/ThemeProvider";
import { getPersonalInfo } from "@/models/PersonalInfo";
import { getSocials } from "@/models/Social";
import type { Portfolio, Social } from "@/types/portfolio";

export const metadata: Metadata = {
  metadataBase: new URL("https://sourovadikari.xyz"),
  title: {
    default: "Sourov Chandra Adikari — Full Stack Web Developer",
    template: "%s | Sourov Chandra Adikari",
  },
  description:
    "Sourov Chandra Adikari is a Full Stack Web Developer and Student creating modern, responsive, and user-focused web applications.",
  authors: [
    {
      name: "Sourov Chandra Adikari",
      url: "https://sourovadikari.xyz",
    },
  ],
  creator: "Sourov Chandra Adikari",
  publisher: "Sourov Chandra Adikari",
  keywords: [
    "Sourov Chandra Adikari",
    "Sourov Adikari",
    "Full Stack Web Developer",
    "Web Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Bangladesh Web Developer",
  ],
  alternates: {
    canonical: "https://sourovadikari.xyz",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    type: "website",
    url: "https://sourovadikari.xyz",
    title: "Sourov Chandra Adikari — Full Stack Web Developer",
    description:
      "Portfolio of Sourov Chandra Adikari, a Full Stack Web Developer and Student creating modern, responsive, and user-focused web applications.",
    siteName: "Sourov Chandra Adikari",
    locale: "en_US",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Sourov Chandra Adikari — Full Stack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sourov Chandra Adikari — Full Stack Web Developer",
    description: "Portfolio of Sourov Chandra Adikari, a Full Stack Web Developer and Student.",
    images: ["/og-image.webp"],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#0b0b0f",
};

export const dynamic = "force-dynamic";

export default async function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const [portfolioResult, socialsResult] = await Promise.allSettled([getPersonalInfo(), getSocials()]);
  const portfolio = (portfolioResult.status === "fulfilled" ? portfolioResult.value : {}) as Portfolio;
  const socials = (socialsResult.status === "fulfilled" ? socialsResult.value : []) as Social[];

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <div className="bg-background min-h-screen relative overflow-x-hidden selection:bg-primary/30 selection:text-primary-foreground">
            <SmoothScroll>
              <Header portfolio={portfolio} />
              <Suspense fallback={<div className="min-h-screen px-6 pt-40 text-center text-muted-foreground" role="status" aria-live="polite">Loading portfolio...</div>}>
                {children}
              </Suspense>
              <Footer portfolio={portfolio} socials={socials} />
            </SmoothScroll>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
