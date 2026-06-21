import Link from "next/link";
import { SITE, IMAGES } from "@/lib/content";

export default function CtaBand() {
  return (
    <section className="cta-band">
      <div className="cta-band-bg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={IMAGES.hlinikPergola} alt="" aria-hidden="true" />
      </div>
      <div className="wrap inner">
        <span className="eyebrow light">Začnime spolu</span>
        <h2>Premeňte svoju terasu na priestor, ktorý budete milovať</h2>
        <p>Vyžiadajte si nezáväznú cenovú ponuku na mieru. Ozveme sa vám a navrhneme riešenie presne pre váš priestor.</p>
        <div className="cta-actions">
          <Link href="/akcna-cenova-ponuka/" className="btn btn-primary">Získať cenovú ponuku</Link>
          <a href={SITE.phoneHref} className="btn btn-light">{SITE.phone}</a>
        </div>
      </div>
    </section>
  );
}
