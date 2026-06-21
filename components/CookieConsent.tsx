"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "ws-consent-v1";

type Consent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

function applyConsent(c: Consent) {
  const granted = "granted";
  const denied = "denied";
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("consent", "update", {
      analytics_storage: c.analytics ? granted : denied,
      ad_storage: c.marketing ? granted : denied,
      ad_user_data: c.marketing ? granted : denied,
      ad_personalization: c.marketing ? granted : denied,
      functionality_storage: c.preferences ? granted : denied,
      personalization_storage: c.preferences ? granted : denied,
      security_storage: granted,
    });
  }
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("consent", c.marketing ? "grant" : "revoke");
  }
}

export default function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(true);
  const [preferences, setPreferences] = useState(true);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        setOpen(true);
      } else {
        applyConsent(JSON.parse(stored) as Consent);
      }
    } catch {
      setOpen(true);
    }
  }, []);

  function save(c: Omit<Consent, "necessary">) {
    const consent: Consent = { necessary: true, ...c };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    } catch {}
    applyConsent(consent);
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div className="cc-overlay" role="dialog" aria-modal="true" aria-labelledby="cc-title">
      <div className="cc-box">
        <h2 id="cc-title" className="cc-title">Tento web používa cookies</h2>
        <p className="cc-body">
          Súbory cookie nám pomáhajú zlepšovať web, merať jeho výkon a personalizovať reklamu.{" "}
          <a href="/ochrana-osobnych-udajov/">Viac informácií</a>.
        </p>

        {details && (
          <div className="cc-cats">
            <label className="cc-cat cc-cat--locked">
              <span>
                <strong>Nevyhnutné</strong>
                <small>Potrebné pre základné fungovanie webu. Vždy aktívne.</small>
              </span>
              <input type="checkbox" checked readOnly aria-label="Nevyhnutné (vždy aktívne)" />
            </label>
            <label className="cc-cat">
              <span>
                <strong>Analytické</strong>
                <small>Meranie návštevnosti (Google Analytics).</small>
              </span>
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
              />
            </label>
            <label className="cc-cat">
              <span>
                <strong>Marketingové</strong>
                <small>Reklama a remarketing (Meta Pixel, Google Ads).</small>
              </span>
              <input
                type="checkbox"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
              />
            </label>
            <label className="cc-cat">
              <span>
                <strong>Preferencie</strong>
                <small>Zapamätanie vašich nastavení a volieb.</small>
              </span>
              <input
                type="checkbox"
                checked={preferences}
                onChange={(e) => setPreferences(e.target.checked)}
              />
            </label>
          </div>
        )}

        <div className="cc-actions">
          <button
            type="button"
            className="cc-btn cc-btn--primary"
            onClick={() => save({ analytics: true, marketing: true, preferences: true })}
          >
            Povoliť všetky
          </button>
          {details ? (
            <button
              type="button"
              className="cc-btn cc-btn--ghost"
              onClick={() => save({ analytics, marketing, preferences })}
            >
              Uložiť výber
            </button>
          ) : (
            <button
              type="button"
              className="cc-btn cc-btn--ghost"
              onClick={() => setDetails(true)}
            >
              Nastaviť
            </button>
          )}
          <button
            type="button"
            className="cc-btn cc-btn--ghost"
            onClick={() => save({ analytics: false, marketing: false, preferences: false })}
          >
            Odmietnuť
          </button>
        </div>
      </div>
    </div>
  );
}
