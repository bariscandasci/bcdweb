import { Check, Mail } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { container } from "@/lib/styles";

const points = [
  "Demo veya keşif toplantısı",
  "Kurumunuza göre kapsam",
  "Net bir sonraki adım",
];

export function Contact() {
  return (
    <section id="iletisim" className="scroll-mt-24 py-20 sm:py-28">
      <div className={`${container} grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr]`}>
        <Reveal>
          <p className="text-sm font-semibold text-[#3B82F6]">İletişim</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
            Projenizi birlikte değerlendirelim
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-400">
            Demo veya keşif toplantısı için formu doldurun. Kurumunuzun veri, iş gücü veya yazılım
            ihtiyacını kısaca anlatmanız yeterli.
          </p>
          <ul className="mt-6 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-3 text-sm text-slate-300">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-[#3B82F6]/15 text-[#3B82F6]">
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                {point}
              </li>
            ))}
          </ul>
          <a
            href="mailto:iletisim@bcdtechnologies.com"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-slate-200 no-underline hover:text-white"
          >
            <Mail className="h-4 w-4 text-[#3B82F6]" aria-hidden="true" />
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
