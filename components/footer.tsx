"use client";

import { useCopy } from "@/components/locale";
import { Logo } from "@/components/logo";
import { container } from "@/lib/styles";

export function Footer() {
  const { copy } = useCopy();
  const links = [
    { href: "#cozumler", label: copy.nav.solutions },
    { href: "#senaryolar", label: copy.nav.scenarios },
    { href: "#guvenlik", label: copy.footer.security },
    { href: "#vizyon", label: copy.footer.vision },
    { href: "#yaklasim", label: copy.nav.approach },
    { href: "#hakkimizda", label: copy.nav.about },
    { href: "#iletisim", label: copy.contact.eyebrow },
  ];

  return (
    <footer className="border-t border-white/10">
      <div className={`${container} grid gap-10 py-14 md:grid-cols-3`}>
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-6 text-[#A1A1AA]">
            {copy.footer.blurb}
          </p>
        </div>

        <nav aria-label={copy.footer.linksTitle}>
          <p className="text-sm font-semibold text-white">{copy.footer.linksTitle}</p>
          <ul className="mt-4 space-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-[#A1A1AA] no-underline transition hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-sm font-semibold text-white">{copy.footer.contactTitle}</p>
          <a
            href="mailto:iletisim@bcdtechnologies.com"
            className="mt-4 inline-block text-sm text-[#C8C4BC] no-underline transition hover:text-white"
          >
            iletisim@bcdtechnologies.com
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className={`${container} py-6 text-sm text-[#A1A1AA]`}>
          {copy.footer.rights}
        </p>
      </div>
    </footer>
  );
}
