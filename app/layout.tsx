import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Analytics, { GtmNoScript } from "@/components/Analytics";
import CookieConsent from "@/components/CookieConsent";
import WhatsAppButton from "@/components/WhatsAppButton";
import { PROD, GSC_VERIFICATION } from "@/lib/seo";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  metadataBase: new URL(PROD),
  title: {
    default: "WoodSteel.sk - Zimné záhrady, pergoly a zasklenia terás",
    template: "%s",
  },
  description:
    "WoodSteel navrhuje a vyrába zimné záhrady, pergoly, zasklenia terás a prístrešky na auto z dreva a hliníka. Komplexné riešenie od návrhu po montáž na celom Slovensku.",
  verification: { google: GSC_VERIFICATION },
  alternates: { canonical: PROD + "/" },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "WoodSteel.sk",
  url: PROD,
  telephone: SITE.phone,
  email: SITE.email,
  image: PROD + "/img/woodsteel-weblogo.png",
  areaServed: "SK",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rovinka",
    addressRegion: "okres Senec",
    addressCountry: "SK",
  },
  sameAs: [SITE.instagram],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sk">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <Analytics />
      </head>
      <body>
        <GtmNoScript />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieConsent />
      </body>
    </html>
  );
}
