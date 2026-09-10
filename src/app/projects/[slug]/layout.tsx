import type { Metadata } from "next";
import { getProjectBySlug } from "@/models/Project";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;

  try {
    const project = await getProjectBySlug(slug);
    if (!project) return { title: "Project — Sourov Chandra Adikari", description: "Explore a project by Sourov Chandra Adikari." };
    const title = String(project.title ?? project.name ?? "Project");
    const description = String(project.description ?? project.subtitle ?? "Explore this project by Sourov Chandra Adikari.");
    const canonical = `https://sourovadikari.xyz/projects/${encodeURIComponent(slug)}`;
    const image = project.image;
    return {
      title: `${title} — Sourov Chandra Adikari`,
      description,
      alternates: { canonical },
      openGraph: {
        type: "article",
        url: canonical,
        title: `${title} — Sourov Chandra Adikari`,
        description,
        images: image ? [{ url: String(image), alt: title }] : [{ url: "/og-image.webp", alt: title }],
      },
      twitter: { card: "summary_large_image", title: `${title} — Sourov Chandra Adikari`, description, images: image ? [String(image)] : ["/og-image.webp"] },
    };
  } catch {
    return { title: "Project — Sourov Chandra Adikari", description: "Explore a project by Sourov Chandra Adikari." };
  }
}

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
