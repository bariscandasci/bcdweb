"use client";

import { Cloud, KeyRound, Lock, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { useCopy } from "@/components/locale";
import { container } from "@/lib/styles";

const icons: LucideIcon[] = [ShieldCheck, KeyRound, Lock, Cloud];

export function Security() {
  const { copy } = useCopy();
  const security = copy.security;

  return (
    <section id="guvenlik" className="scroll-mt-24 pb-20 sm:pb-28">
      <div className={container}>
        <Reveal>
          <SectionHeading
            eyebrow={security.eyebrow}
            title={security.title}
            description={security.description}
          />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {security.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <Reveal key={item.title} delay={index * 0.06} className="h-full">
                <article className="panel h-full rounded-2xl p-5">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#D4AF37]/15 text-[#E5C17B]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-base font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#A1A1AA]">{item.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
