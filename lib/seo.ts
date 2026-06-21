import type { Metadata } from "next";
import seoExport from "./seo-export.json";

export const PROD = "https://woodsteel.sk";
export const GSC_VERIFICATION = "YKEOg1-tX28Hj7soObmAi8-KitpGkoGqV4vRSvCZMDE";

type SeoEntry = {
  url?: string;
  path?: string;
  title?: string;
  meta_description?: string | null;
  canonical?: string;
  og_image?: string | null;
  h1?: string;
  content_html?: string;
};

function norm(p: string): string {
  let path = (p || "/").split("?")[0];
  if (!path.startsWith("/")) path = "/" + path;
  if (path.length > 1) path = path.replace(/\/+$/, "");
  return path;
}

const byPath = new Map<string, SeoEntry>();
for (const e of seoExport as SeoEntry[]) {
  if (e && e.path) byPath.set(norm(e.path), e);
}

/** Exact prod metadata for a path, if we exported it. */
export function getSeo(path: string): SeoEntry | undefined {
  return byPath.get(norm(path));
}

/** Real article body HTML from prod, if available. */
export function getArticleHtml(slug: string): string {
  return getSeo("/" + slug)?.content_html || "";
}

/**
 * Build Next Metadata. `path` should include a trailing slash to mirror prod.
 * `fallback.title` must already be the full "X - WoodSteel.sk" string.
 * Canonical always points to PROD woodsteel.sk so SEO equity is preserved
 * through the eventual cut-over (the staging deploy stays out of the index).
 */
export function makeMetadata(
  path: string,
  fallback: { title: string; description?: string; image?: string }
): Metadata {
  const e = getSeo(path);
  const title = e?.title || fallback.title;
  const description =
    e?.meta_description || fallback.description ||
    "WoodSteel — zimné záhrady, pergoly, zasklenia terás a prístrešky z dreva a hliníka na mieru.";
  const withSlash = path.endsWith("/") ? path : path + "/";
  const canonical = `${PROD}${withSlash}`;
  const image = e?.og_image || fallback.image;

  return {
    title,
    description,
    alternates: { canonical },
    verification: { google: GSC_VERIFICATION },
    robots: { index: true, follow: true },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "WoodSteel.sk",
      locale: "sk_SK",
      type: "website",
      images: image ? [{ url: image }] : undefined,
    },
  };
}
