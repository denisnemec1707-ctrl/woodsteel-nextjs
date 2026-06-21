import Link from "next/link";
import { ARTICLES } from "@/lib/content";
import { makeMetadata } from "@/lib/seo";

export const metadata = makeMetadata("/clanky/", {
  title: "Články - WoodSteel.sk",
  description:
    "Blog WoodSteel — tipy a inšpirácie o zimných záhradách, pergolách, zasklení terás a prístreškoch.",
});

export default function ClankyPage() {
  return (
    <section className="sec" style={{ paddingTop: 130 }}>
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Blog</span>
          <h2>Články a inšpirácie</h2>
          <p>Tipy o zimných záhradách, pergolách a zasklení terás — od návrhu po údržbu.</p>
        </div>
        <div className="blog-grid">
          {ARTICLES.map((a) => (
            <Link href={`/${a.slug}/`} className="blog-card" key={a.slug}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={a.image} alt={a.h1} loading="lazy" />
              <div className="bc-body">
                <h3>{a.h1}</h3>
                <p>{a.excerpt}</p>
                <span className="more">Čítať článok →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
