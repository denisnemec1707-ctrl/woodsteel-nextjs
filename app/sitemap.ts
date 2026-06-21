import type { MetadataRoute } from "next";
import { ARTICLES, PAGES } from "@/lib/content";
import { PROD } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = new Set<string>(["/", "/clanky/"]);
  Object.keys(PAGES).forEach((p) => paths.add(p));
  ARTICLES.forEach((a) => paths.add(`/${a.slug}/`));

  const now = new Date();
  return [...paths].map((p) => ({
    url: `${PROD}${p}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: p === "/" ? 1 : p.endsWith("/") && p.split("/").length === 2 ? 0.8 : 0.6,
  }));
}
