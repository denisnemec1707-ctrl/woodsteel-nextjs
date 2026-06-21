import Link from "next/link";
import { makeMetadata } from "@/lib/seo";
import { PRODUCTS, IMAGES, SITE } from "@/lib/content";
import CtaBand from "@/components/CtaBand";

export const metadata = makeMetadata("/", {
  title: "WoodSteel.sk - Zimné záhrady, pergoly a zasklenia terás",
  description:
    "WoodSteel navrhuje a vyrába zimné záhrady, pergoly, zasklenia terás a prístrešky na auto z dreva a hliníka. Od návrhu po montáž na celom Slovensku.",
  image: IMAGES.zimneZahrady,
});

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={IMAGES.zimneZahrady} alt="Zimná záhrada WoodSteel" />
        </div>
        <div className="wrap">
          <div className="hero-inner">
            <span className="eyebrow light">Drevo &amp; hliník · výroba na mieru</span>
            <h1>
              Záhradné stavby, ktoré <em>predĺžia</em> vašu sezónu
            </h1>
            <p>
              Navrhujeme a vyrábame zimné záhrady, pergoly, zasklenia terás a prístrešky na mieru.
              Od prvého náčrtu až po montáž — všetko pod jednou strechou.
            </p>
            <div className="hero-actions">
              <Link href="/akcna-cenova-ponuka/" className="btn btn-primary">Získať cenovú ponuku</Link>
              <Link href="/realizacie/" className="btn btn-light">Pozrieť realizácie</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="usp">
        <div className="wrap usp-grid">
          <div className="usp-item"><div className="num">100%</div><h4>Výroba na mieru</h4><p>Každá stavba podľa vášho priestoru a predstáv.</p></div>
          <div className="usp-item"><div className="num">2</div><h4>Drevo aj hliník</h4><p>Dve prémiové materiálové línie pod jednou značkou.</p></div>
          <div className="usp-item"><div className="num">A–Z</div><h4>Komplexný servis</h4><p>Návrh, zameranie, výroba, doprava aj montáž.</p></div>
          <div className="usp-item"><div className="num">SK</div><h4>Slovenská firma</h4><p>Ľudský prístup s dôrazom na kvalitu a detail.</p></div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Naše portfólio</span>
            <h2>Riešenia pre váš exteriér</h2>
            <p>Od útulných zimných záhrad cez elegantné pergoly až po praktické zasklenia a prístrešky.</p>
          </div>
          <div className="prod-grid">
            {PRODUCTS.map((p) => (
              <Link href={p.href} className="prod-card" key={p.href}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt={p.title} />
                <div className="prod-body">
                  <span className="tag">{p.tag}</span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                  <span className="prod-link">Zistiť viac →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
