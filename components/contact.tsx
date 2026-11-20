"use client";

import { Check, Mail } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { useCopy } from "@/components/locale";
import { Reveal } from "@/components/reveal";
import { container } from "@/lib/styles";

export function Contact() {
  const { copy } = useCopy();
  const contact = copy.contact;

  return (
    <section id="iletisim" className="scroll-mt-24 py-20 sm:py-28">
      <div className={`${container} grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr]`}>
        <Reveal>
          <p className="text-sm font-semibold text-[#D4AF37]">{contact.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
            {contact.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-[#A1A1AA]">{contact.body}</p>
          <ul className="mt-6 space-y-3">
            {contact.points.map((point) => (
              <li key={point} className="flex items-center gap-3 text-sm text-[#C8C4BC]">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-[#D4AF37]/15 text-[#D4AF37]">
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                {point}
              </li>
            ))}
          </ul>
          <a
            href="mailto:iletisim@bcdtechnologies.com"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#E4E4E7] no-underline hover:text-white"
          >
            <Mail className="h-4 w-4 text-[#D4AF37]" aria-hidden="true" />
            iletisim@bcdtechnologies.com
          </a>
        </Reveal>

        <Reveal delay={0.08}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
