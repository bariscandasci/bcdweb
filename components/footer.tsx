import { Logo } from "@/components/logo";
import { container } from "@/lib/styles";

const links = [
  { href: "#cozumler", label: "Çözümlerimiz" },
  { href: "#vizyon", label: "Vizyon & Misyon" },
  { href: "#yaklasim", label: "Yaklaşımımız" },
  { href: "#hakkimizda", label: "Hakkımızda" },
  { href: "#iletisim", label: "İletişim" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className={`${container} grid gap-10 py-14 md:grid-cols-3`}>
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-6 text-[#A1A1AA]">
            Kurumsal firmalar için veri analitiği panelleri, akıllı iş gücü haritalama ve özel
            yazılım.
          </p>
        </div>

        <nav aria-label="Hızlı linkler">
          <p className="text-sm font-semibold text-white">Hızlı linkler</p>
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
          <p className="text-sm font-semibold text-white">İletişim</p>
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
          © 2026 BCD TECHNOLOGIES. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}
