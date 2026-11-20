"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { useCopy } from "@/components/locale";
import { Logo } from "@/components/logo";
import type { Locale } from "@/lib/messages";
import { container, primaryButtonSm } from "@/lib/styles";

function LanguageSwitch() {
  const { locale, setLocale, copy } = useCopy();
  const option = (code: Locale, label: string) => (
    <button
      type="button"
      aria-pressed={locale === code}
      onClick={() => setLocale(code)}
      className={`cursor-pointer px-1 ${locale === code ? "text-[#E5C17B]" : "text-[#A1A1AA] hover:text-white"}`}
    >
      {label}
    </button>
  );

  return (
    <div role="group" aria-label={copy.langLabel} className="flex items-center text-xs font-semibold tracking-[0.16em]">
      {option("tr", "TR")}
      <span className="text-[#5A5348]" aria-hidden="true">
        |
      </span>
      {option("en", "EN")}
    </div>
  );
}

export function Navbar() {
  const { copy } = useCopy();
  const links = [
    { href: "#cozumler", label: copy.nav.solutions },
    { href: "#senaryolar", label: copy.nav.scenarios },
    { href: "#yaklasim", label: copy.nav.approach },
    { href: "#hakkimizda", label: copy.nav.about },
  ];
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (media.matches) setOpen(false);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    firstLinkRef.current?.focus();
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#2A2418] bg-[#050505]/85 backdrop-blur-xl">
      <div className={`${container} flex h-16 items-center justify-between gap-4`}>
        <Logo />

        <nav className="hidden items-center gap-6 lg:flex xl:gap-8" aria-label={copy.nav.menu}>
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitch />
          <div className="hidden sm:block">
            <a href="#iletisim" className={primaryButtonSm}>
              {copy.nav.contact}
            </a>
          </div>
          <button
            type="button"
            className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-white/10 text-white lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">{open ? copy.nav.close : copy.nav.open}</span>
          </button>
        </div>
      </div>

      {open ? (
        <button
          type="button"
          className="fixed inset-0 top-16 z-40 bg-[#050505]/95 lg:hidden"
          aria-label={copy.nav.close}
          onClick={close}
        />
      ) : null}

      {open ? (
        <nav
          id={menuId}
          aria-label={copy.nav.menu}
          className="absolute inset-x-0 top-full z-50 border-b border-[#2A2418] bg-[#0A0A0C] px-5 py-4 shadow-[0_24px_60px_rgba(0,0,0,0.45)] lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {links.map((link, index) => (
              <li key={link.href}>
                <a
                  ref={index === 0 ? firstLinkRef : undefined}
                  href={link.href}
                  className="block rounded-lg px-3 py-3 text-base text-[#E4E4E7] no-underline hover:bg-white/5 hover:text-white"
                  onClick={close}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-3 sm:hidden">
            <a href="#iletisim" className={`${primaryButtonSm} w-full`} onClick={close}>
              {copy.nav.contact}
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
