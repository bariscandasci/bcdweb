"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { Logo } from "@/components/logo";
import { container, primaryButtonSm } from "@/lib/styles";

const links = [
  { href: "#cozumler", label: "Çözümlerimiz" },
  { href: "#yaklasim", label: "Yaklaşımımız" },
  { href: "#hakkimizda", label: "Hakkımızda" },
];

export function Navbar() {
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

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Bölümler">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <a href="#iletisim" className={primaryButtonSm}>
              İletişime Geç
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
            <span className="sr-only">{open ? "Menüyü kapat" : "Menüyü aç"}</span>
          </button>
        </div>
      </div>

      {open ? (
        <button
          type="button"
          className="fixed inset-0 top-16 z-40 bg-[#050505]/95 lg:hidden"
          aria-label="Menüyü kapat"
          onClick={close}
        />
      ) : null}

      {open ? (
        <nav
          id={menuId}
          aria-label="Mobil bölümler"
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
              İletişime Geç
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
