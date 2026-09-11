import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Sourov Chandra Adikari",
  description: "Read the Privacy Policy for Sourov Chandra Adikari's portfolio website, including information about data collection, use, storage, and user privacy.",
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
