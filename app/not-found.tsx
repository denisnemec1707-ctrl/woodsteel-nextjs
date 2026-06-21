import Link from "next/link";

export default function NotFound() {
  return (
    <section className="sec" style={{ paddingTop: 150, textAlign: "center" }}>
      <div className="wrap narrow">
        <span className="eyebrow" style={{ justifyContent: "center" }}>404</span>
        <h1 style={{ fontSize: "2.4rem", margin: "16px 0" }}>Stránka sa nenašla</h1>
        <p className="para">Ľutujeme, požadovaná stránka neexistuje alebo bola presunutá.</p>
        <p style={{ marginTop: 20 }}>
          <Link href="/" className="btn btn-primary">Späť na úvod</Link>
        </p>
      </div>
    </section>
  );
}
