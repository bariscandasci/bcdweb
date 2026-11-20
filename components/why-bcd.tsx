"use client";

import { Layers, ShieldCheck, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useCopy } from "@/components/locale";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { container, primaryButtonSm } from "@/lib/styles";

const reasonIcons: LucideIcon[] = [Layers, ShieldCheck, Workflow];

export function WhyBcd() {
  const { copy } = useCopy();
  const why = copy.why;

  return (
    <section id="yaklasim" className="scroll-mt-24 py-20 sm:py-28">
      <div className={container}>
        <Reveal>
          <SectionHeading
            eyebrow={why.eyebrow}
            title={why.title}
            description={why.description}
          />
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {why.reasons.map((reason, index) => {
            const Icon = reasonIcons[index];
            return (
            <Reveal key={reason.title} delay={index * 0.08} className="h-full">
              <article className="panel h-full rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#D4AF37]/15 text-[#D4AF37]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold text-[#D4AF37] tabular-nums">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-white">{reason.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#A1A1AA]">{reason.text}</p>
              </article>
            </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.16}>
          <div className="mt-4 flex flex-col gap-5 rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <h3 className="text-lg font-semibold text-white">{why.customTitle}</h3>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-[#C8C4BC]">{why.customText}</p>
            </div>
            <a href="#iletisim" className={`${primaryButtonSm} shrink-0`}>
              {why.customCta}
            </a>
          </div>
        </Reveal>

        <div className="mt-14">
          <Reveal>
            <h3 className="text-xl font-semibold text-white">{why.stepsTitle}</h3>
          </Reveal>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {why.steps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.06} className="h-full">
                <article className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <span className="text-sm font-semibold text-[#D4AF37] tabular-nums">0{index + 1}</span>
                  <h4 className="mt-3 font-semibold text-white">{step.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-[#A1A1AA]">{step.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
