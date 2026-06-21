# WoodSteel.sk — Next.js (SEO-preserving migration)

Next.js (App Router) verzia webu woodsteel.sk, pripravená tak, aby pri migrácii
z WordPressu nedošlo k strate SEO equity.

## Čo je hotové
- **URL štruktúra 1:1 s prod-om** — 12 blog článkov na root úrovni (`/<slug>/`),
  produktové stránky (`/pergoly/…`, `/zimne-zahrady/…`, `/zasklenie-teras/`),
  realizácie (`/realizacie/…`) a ostatné (`/o-nas/`, `/kontakt/`, `/showroom/`,
  `/clanky/`, `/akcna-cenova-ponuka/`, `/na-stiahnutie/`,
  `/ochrana-osobnych-udajov/`).
- **Metadata** — title pattern „X - WoodSteel.sk", canonical → `https://woodsteel.sk/…`,
  Google Search Console verifikácia.
- **301/308 redirects** — `/clanky/<slug>` → `/<slug>` (`next.config.mjs`).
- **Sitemap + robots** — `app/sitemap.ts` (34 URL), `app/robots.ts`.
- **Tracking + Consent Mode v2** — GA4, GTM, Meta Pixel; default DENIED, aktivácia
  až po súhlase cez cookie lištu (`components/Analytics.tsx`, `CookieConsent.tsx`).
- **Obsah článkov** — ťahá sa pri builde z exportu (`scripts/fetch-seo.mjs`).

## Spustenie lokálne
```bash
npm install
npm run dev
```

## Build / deploy
`npm run build` najprv stiahne obsah (`scripts/fetch-seo.mjs`), potom spustí
`next build`. Nasadené na Vercel.

## Poznámka ku canonical
Canonical aj sitemap zámerne smerujú na `https://woodsteel.sk`. Po prepnutí
domény (cut-over) sú hodnoty rovno správne a SEO equity ostáva zachovaná.
