import { ArrowRight } from "lucide-react";
import { DashboardMockup } from "@/components/dashboard-mockup";
import { Reveal } from "@/components/reveal";
import { container, primaryButtonMd, secondaryButtonMd } from "@/lib/styles";

const areas = ["Veri analitiği panelleri", "İş gücü haritalama", "Özel yazılım"];

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-svh items-center overflow-hidden pt-20 pb-16">
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.18),transparent_55%)]"
        aria-hidden="true"
      />

      <div className={`${container} relative grid items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12`}>
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm text-slate-300">
              <span className="h-1.5 w-1.5 rounded-full bg-[#3B82F6]" aria-hidden="true" />
              Kurumsal teknoloji ortağı
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-xl text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl lg:text-[3.35rem] lg:leading-[1.08]">
              Veriyi, iş gücünü ve operasyonu aynı netlikte yönetin.
            </h1>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-6 max-w-xl text-base leading-7 text-pretty text-slate-300 sm:text-lg sm:leading-8">
              BCD TECHNOLOGIES, kurumsal firmalar için veri analitiği panelleri, akıllı iş gücü
              haritalama sistemleri ve özel yazılım çözümleri geliştirir. Yöneticiler, insan
              kaynakları ve operasyon ekipleri dağınık bilgiyi güvenli bir yüzeyde okur; teknoloji
              yatırımcıları ve iş ortakları ise ölçeklenebilir, denetime açık bir mimariyle
              karşılaşır.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#iletisim" className={`${primaryButtonMd} w-full sm:w-auto`}>
                Demo / Toplantı Planla
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="#cozumler" className={`${secondaryButtonMd} w-full sm:w-auto`}>
                Çözümlerimizi İncele
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.26}>
            <ul className="mt-8 flex flex-wrap gap-2">
              {areas.map((area) => (
                <li
                  key={area}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-slate-300"
                >
                  {area}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <DashboardMockup />
      </div>
    </section>
  );
}
