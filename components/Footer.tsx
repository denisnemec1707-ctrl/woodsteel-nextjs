import Link from "next/link";
import { SITE, IMAGES } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMAGES.logo} alt="WoodSteel" />
            <p>
              Zimné záhrady, pergoly, zasklenia a prístrešky z dreva a hliníka. Výroba na mieru od
              návrhu po montáž.
            </p>
          </div>
          <div className="foot-col">
            <h5>Produkty</h5>
            <Link href="/zimne-zahrady/">Zimné záhrady</Link>
            <Link href="/pergoly/">Pergoly</Link>
            <Link href="/zasklenie-teras/">Zasklenie terás</Link>
            <Link href="/pergoly/pristresky-na-auto/">Prístrešky na auto</Link>
          </div>
          <div className="foot-col">
            <h5>Spoločnosť</h5>
            <Link href="/o-nas/">O nás</Link>
            <Link href="/realizacie/">Realizácie</Link>
            <Link href="/clanky/">Články</Link>
            <Link href="/kontakt/">Kontakt</Link>
            <Link href="/ochrana-osobnych-udajov/">Ochrana osobných údajov</Link>
          </div>
          <div className="foot-col">
            <h5>Kontakt</h5>
            <a href={SITE.phoneHref}>{SITE.phone}</a>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <span>Showroom: {SITE.location}</span>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© {year} WoodSteel.sk — Všetky práva vyhradené.</span>
          <a href={SITE.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
