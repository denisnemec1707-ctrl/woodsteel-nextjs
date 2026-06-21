import Script from "next/script";

export const GA4_ID = "G-TJYX8EZCE9";
export const GTM_ID = "GTM-T9DK83FF";
export const META_PIXEL_ID = "832550835442654";
export const RECAPTCHA_SITE_KEY = "6LdWUgwpAAAAAE0XaFDuBWj96GRzwvzhAXF2UaSJ";

/**
 * Google Consent Mode v2 — everything DENIED by default for EU compliance.
 * GA4 / GTM / Meta Pixel are loaded but stay gated until the user grants
 * consent via the cookie banner (which calls gtag('consent','update', ...)).
 */
export default function Analytics() {
  return (
    <>
      <Script id="consent-default" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){ dataLayer.push(arguments); }
          window.gtag = gtag;
          gtag('consent', 'default', {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            analytics_storage: 'denied',
            functionality_storage: 'denied',
            personalization_storage: 'denied',
            security_storage: 'granted',
            wait_for_update: 500
          });
          gtag('js', new Date());
        `}
      </Script>

      {/* Google Tag Manager */}
      <Script id="gtm" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>

      {/* Google Analytics 4 */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-config" strategy="afterInteractive">
        {`gtag('config', '${GA4_ID}', { anonymize_ip: true });`}
      </Script>

      {/* Meta (Facebook) Pixel — consent revoked until user opts in */}
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
          n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
          document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('consent','revoke');
          fbq('init','${META_PIXEL_ID}');
          fbq('track','PageView');
        `}
      </Script>
    </>
  );
}

/** GTM <noscript> fallback — render at the very top of <body>. */
export function GtmNoScript() {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}
