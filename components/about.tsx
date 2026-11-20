"use client";

import { useCopy } from "@/components/locale";
import { Reveal } from "@/components/reveal";
import { container } from "@/lib/styles";

export function About() {
  const { copy } = useCopy();
  const about = copy.about;

  return (
    <section id="hakkimizda" className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08),transparent_62%)]"
        aria-hidden="true"
      />
      <div className={`${container} relative grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr]`}>
        <Reveal>
          <p className="text-sm font-semibold text-[#D4AF37]">{about.eyebrow}</p>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
            {about.title}
          </h2>
          <div className="mt-6 max-w-xl space-y-4 text-base leading-7 text-[#C8C4BC]">
            <p>{about.p1}</p>
            <p>{about.p2}</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
            {about.principles.map((principle) => (
              <li key={principle.title} className="p-5 sm:p-6">
                <h3 className="text-base font-semibold text-white">{principle.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#A1A1AA]">{principle.text}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
