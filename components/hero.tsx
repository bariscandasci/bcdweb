"use client";

import { ArrowRight } from "lucide-react";
import { DashboardMockup } from "@/components/dashboard-mockup";
import { useCopy } from "@/components/locale";
import { Reveal } from "@/components/reveal";
import { container, primaryButtonMd, secondaryButtonMd } from "@/lib/styles";

export function Hero() {
  const { copy } = useCopy();
  const hero = copy.hero;

  return (
    <section id="hero" className="relative pt-16">
      <div
        className={`${container} relative grid items-start gap-6 py-4 lg:min-h-[calc(100svh-4rem)] lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)] lg:items-start lg:gap-8 lg:py-5`}
      >
        <div className="min-w-0">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm text-[#C8C4BC]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E5C17B]" aria-hidden="true" />
              {hero.kicker}
            </p>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="mt-4 text-[2.45rem] font-semibold tracking-tight text-balance text-white sm:text-5xl lg:mt-5 lg:text-[3.35rem] lg:leading-[1.02] xl:text-[3.7rem]">
              {hero.before}
              <span className="text-glow">{hero.glow1}</span>
              {hero.mid}
              <span className="text-glow">{hero.glow2}</span>
              {hero.after}
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-4 max-w-xl text-sm leading-6 text-pretty text-[#C8C4BC] sm:text-base sm:leading-7">
              {hero.body}
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a href="#iletisim" className={`${primaryButtonMd} w-full sm:w-auto`}>
                {hero.primary}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="#cozumler" className={`${secondaryButtonMd} w-full sm:w-auto`}>
                {hero.secondary}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="mt-5 flex flex-wrap gap-2">
              {hero.areas.map((area) => (
                <li
                  key={area}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-[#C8C4BC]"
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
