"use client";

import { Blocks, Cable, LayoutDashboard, Network } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useCopy } from "@/components/locale";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { container } from "@/lib/styles";

const monthHeights = [34, 52, 44, 68, 60, 88];

export function Solutions() {
  const { copy } = useCopy();
  const solutions = copy.solutions;
  const sideCards: { title: string; text: string; icon: LucideIcon; className: string }[] = [
    {
      title: solutions.workforceTitle,
      text: solutions.workforceText,
      icon: Network,
      className: "md:col-span-2",
    },
    {
      title: solutions.customTitle,
      text: solutions.customText,
      icon: Blocks,
      className: "md:col-span-2",
    },
  ];

  return (
    <section id="cozumler" className="scroll-mt-24 pt-0 pb-20 sm:pb-28">
      <div className={container}>
        <Reveal>
          <SectionHeading
            eyebrow={solutions.eyebrow}
            title={solutions.title}
            description={solutions.description}
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-6">
          <Reveal className="md:col-span-4 md:row-span-2">
            <article className="panel glow-card flex h-full flex-col rounded-2xl p-6 transition duration-300 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#D4AF37]/15 text-[#D4AF37]">
                  <LayoutDashboard className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-white">{solutions.analyticsTitle}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-[#A1A1AA]">{solutions.analyticsText}</p>
                </div>
              </div>

              <div className="mt-8 flex flex-1 flex-col justify-end rounded-xl border border-white/8 bg-black/20 p-4">
                <div className="mb-3 flex items-center justify-between text-[11px] text-[#A1A1AA]">
                  <span>{solutions.sample}</span>
                  <span>{solutions.trend}</span>
                </div>
                <div className="flex h-28 items-end gap-3">
                  {solutions.months.map((month, index) => (
                    <div key={month} className="flex h-full flex-1 flex-col">
                      <div className="flex flex-1 items-end">
                        <span
                          className={`bar block w-full rounded-t-md ${index === solutions.months.length - 1 ? "bg-[#D4AF37]" : "bg-[#D4AF37]/35"}`}
                          style={{ height: `${monthHeights[index]}px`, animationDelay: `${index * 70}ms` }}
                        />
                      </div>
                      <span className="mt-2 text-center text-[10px] text-[#A1A1AA]">{month}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>

          {sideCards.map((card, index) => {
            const Icon = card.icon;
            return (
            <Reveal key={card.title} delay={0.08 * (index + 1)} className={card.className}>
              <article className="panel glow-card h-full rounded-2xl p-6 transition duration-300">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#D4AF37]/15 text-[#D4AF37]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-white">{card.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#A1A1AA]">{card.text}</p>
              </article>
            </Reveal>
            );
          })}

          <Reveal delay={0.24} className="md:col-span-6">
            <article className="panel glow-card flex flex-col gap-6 rounded-2xl p-6 transition duration-300 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#D4AF37]/15 text-[#D4AF37]">
                  <Cable className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white">{solutions.integrationTitle}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-[#A1A1AA]">{solutions.integrationText}</p>
                </div>
              </div>
              <ul className="flex flex-wrap gap-2">
                {solutions.tags.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-[#C8C4BC]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
