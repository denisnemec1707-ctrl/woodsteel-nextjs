"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV, SITE, IMAGES } from "@/lib/content";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <div className="wrap nav">
        <Link href="/" className="logo" aria-label="WoodSteel — domov">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={IMAGES.logo} alt="WoodSteel" />
        </Link>
        <nav className="nav-links" aria-label="Hlavné menu">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="nav-cta">
          <a href={SITE.phoneHref} className="nav-phone">
            {SITE.phone}
          </a>
          <Link href="/akcna-cenova-ponuka/" className="btn btn-primary">
            Cenová ponuka
          </Link>
          <button
            className="burger"
            aria-label="Otvoriť menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      <div className={`mobile-menu${open ? " open" : ""}`}>
        <button className="mm-close" aria-label="Zavrieť menu" onClick={() => setOpen(false)}>
          &times;
        </button>
        {NAV.map((n) => (
          <Link key={n.href} href={n.href} onClick={() => setOpen(false)}>
            {n.label}
          </Link>
        ))}
        <Link href="/akcna-cenova-ponuka/" className="btn btn-primary mm-cta" onClick={() => setOpen(false)}>
          Cenová ponuka
        </Link>
        <div className="mm-contact">
          <span>Volajte</span>
          <a href={SITE.phoneHref}>{SITE.phone}</a>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </div>
      </div>
    </header>
  );
}
