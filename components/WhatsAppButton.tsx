"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/content";

export default function WhatsAppButton() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      className={`wa-fab${show ? " show" : ""}`}
      href={SITE.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Napísať nám na WhatsApp (otvorí sa v novom okne)"
    >
      <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
        <path d="M16.04 4C9.93 4 4.98 8.95 4.98 15.06c0 2.05.56 4.05 1.62 5.81L4 28l7.3-2.55a11.03 11.03 0 0 0 4.74 1.07h.01c6.11 0 11.06-4.95 11.06-11.06C27.11 8.95 22.15 4 16.04 4zm0 20.2h-.01c-1.5 0-2.97-.4-4.25-1.16l-.3-.18-4.33 1.51 1.45-4.22-.2-.32a9.16 9.16 0 0 1-1.4-4.86c0-5.07 4.13-9.2 9.2-9.2 2.46 0 4.77.96 6.5 2.7a9.13 9.13 0 0 1 2.7 6.5c0 5.07-4.13 9.23-9.06 9.23zm5.05-6.88c-.28-.14-1.64-.81-1.89-.9-.25-.09-.43-.14-.62.14-.18.28-.71.9-.87 1.08-.16.18-.32.2-.6.07-.28-.14-1.17-.43-2.22-1.37-.82-.73-1.38-1.64-1.54-1.92-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.49.14-.16.18-.28.28-.46.09-.18.05-.35-.02-.49-.07-.14-.62-1.5-.85-2.05-.22-.54-.45-.47-.62-.48l-.53-.01c-.18 0-.48.07-.73.35-.25.28-.96.94-.96 2.3 0 1.35.99 2.66 1.13 2.84.14.18 1.95 2.98 4.73 4.18.66.28 1.18.45 1.58.58.66.21 1.27.18 1.74.11.53-.08 1.64-.67 1.87-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" />
      </svg>
    </a>
  );
}
