"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="form form--success" role="status" aria-live="polite">
        <div className="ok-ic" aria-hidden="true">✓</div>
        <h3>Ďakujeme!</h3>
        <p>Vašu správu sme prijali. Ozveme sa vám spravidla do 24 hodín.</p>
      </div>
    );
  }

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        // Demo submit (no backend). reCAPTCHA site key:
        // 6LdWUgwpAAAAAE0XaFDuBWj96GRzwvzhAXF2UaSJ
        setSent(true);
      }}
    >
      <div className="form-row">
        <div className="field">
          <label htmlFor="cf-name">Meno a priezvisko *</label>
          <input id="cf-name" name="name" type="text" required placeholder="Vaše meno" autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="cf-phone">Telefón *</label>
          <input id="cf-phone" name="phone" type="tel" required placeholder="+421" autoComplete="tel" />
        </div>
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor="cf-email">E-mail *</label>
          <input id="cf-email" name="email" type="email" required placeholder="vas@email.sk" autoComplete="email" />
        </div>
        <div className="field">
          <label htmlFor="cf-interest">Mám záujem o</label>
          <select id="cf-interest" name="interest" defaultValue="Zimnú záhradu">
            <option>Zimnú záhradu</option>
            <option>Pergolu</option>
            <option>Zasklenie terasy</option>
            <option>Prístrešok na auto</option>
            <option>Neviem / poradiť</option>
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="cf-msg">Vaša správa</label>
        <textarea id="cf-msg" name="message" placeholder="Popíšte nám svoj projekt, rozmery, predstavu…" />
      </div>
      <label className="check">
        <input type="checkbox" required /> Súhlasím so spracovaním osobných údajov za účelom vybavenia
        mojej požiadavky.
      </label>
      <button type="submit" className="btn btn-primary form-submit">Odoslať dopyt</button>
      <p className="form-note">Ozveme sa vám spravidla do 24 hodín.</p>
    </form>
  );
}
