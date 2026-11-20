"use client";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { useCopy } from "@/components/locale";
import { container } from "@/lib/styles";

export function UseCases() {
  const { copy } = useCopy();
  const cases = copy.cases;

  return (
    <section id="senaryolar" className="scroll-mt-24 py-20 sm:py-28">
      <div className={container}>
        <Reveal>
          <SectionHeading eyebrow={cases.eyebrow} title={cases.title} description={cases.description} />
        </Reveal>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {cases.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08} className="h-full">
              <article className="panel glow-card flex h-full flex-col rounded-2xl p-6 transition duration-300">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <dl className="mt-6 space-y-5">
                  {(
                    [
                      [cases.problem, item.problem],
                      [cases.solution, item.solution],
                      [cases.gain, item.gain],
                    ] as const
                  ).map(([label, text]) => (
                    <div key={label}>
                      <dt className="text-xs font-semibold tracking-[0.14em] text-[#E5C17B] uppercase">{label}</dt>
                      <dd className="mt-1.5 text-sm leading-6 text-[#A1A1AA]">{text}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-5 text-xs leading-5 text-[#A1A1AA]">{cases.note}</p>
      </div>
    </section>
  );
}
