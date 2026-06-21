import { notFound } from "next/navigation";
import Link from "next/link";
import { ARTICLES } from "@/lib/content";
import { makeMetadata, getArticleHtml, getSeo } from "@/lib/seo";
import ArticleBody from "@/components/ArticleBody";
import CtaBand from "@/components/CtaBand";

// Static, root-level blog articles mirror prod woodsteel.sk URLs.
export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

// Only the 12 known article slugs are valid here; everything else 404s.
export const dynamicParams = false;

function find(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = find(slug);
  if (!a) return {};
  return makeMetadata(`/${slug}/`, { title: a.title, description: a.excerpt, image: a.image });
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = find(slug);
  if (!a) notFound();

  const seo = getSeo(`/${slug}/`);
  const h1 = seo?.h1 || a.h1;
  const html = getArticleHtml(slug);

  return (
    <>
      <article className="article">
        <span className="eyebrow">Článok</span>
        <h1>{h1}</h1>
        <ArticleBody html={html} fallback={a.excerpt} />
        <p style={{ marginTop: 28 }}>
          <Link href="/clanky/" className="more" style={{ fontWeight: 700, color: "var(--wood-deep)" }}>
            ← Späť na články
          </Link>
        </p>
      </article>
      <CtaBand />
    </>
  );
}
