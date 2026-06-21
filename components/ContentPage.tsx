import type { PageContent } from "@/lib/content";
import CtaBand from "./CtaBand";
import ContactForm from "./ContactForm";
import MapEmbed from "./MapEmbed";

export default function ContentPage({
  data,
  form,
  map,
}: {
  data: PageContent;
  form?: boolean;
  map?: boolean;
}) {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={data.image} alt="" aria-hidden="true" />
        </div>
        <div className="wrap">
          <span className="eyebrow light">{data.eyebrow}</span>
          <h1>{data.h1}</h1>
          <p className="lead">{data.lead}</p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap narrow">
          {data.intro.map((p, i) => (
            <p key={i} className="para">{p}</p>
          ))}
        </div>

        {data.bullets && (
          <div className="wrap">
            <div className="feature-grid">
              {data.bullets.map((b, i) => (
                <div className="feature-card" key={i}>
                  <h3>{b.title}</h3>
                  <p>{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {data.downloads && data.downloads.length > 0 && (
          <div className="wrap narrow">
            <div className="dl-list">
              {data.downloads.map((d, i) => (
                <a key={i} className="dl-item" href={d.href} download target="_blank" rel="noopener noreferrer">
                  <span className="dl-ic" aria-hidden="true">↓</span>
                  <span className="dl-label">
                    {d.label}
                    {d.note ? <small> ({d.note})</small> : null}
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}

        {data.gallery && data.gallery.length > 0 && (
          <div className="wrap">
            <div className="img-grid">
              {data.gallery.map((src, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={i} src={src} alt="Realizácia WoodSteel" loading="lazy" />
              ))}
            </div>
          </div>
        )}

        {form && (
          <div className="wrap narrow">
            <ContactForm />
          </div>
        )}

        {map && (
          <div className="wrap">
            <MapEmbed />
          </div>
        )}
      </section>

      {data.cta && <CtaBand />}
    </>
  );
}
