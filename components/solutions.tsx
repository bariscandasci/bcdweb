import { Blocks, Cable, LayoutDashboard, Network } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { container } from "@/lib/styles";

const months = [
  { label: "Oca", height: 34 },
  { label: "Mar", height: 52 },
  { label: "May", height: 44 },
  { label: "Tem", height: 68 },
  { label: "Eyl", height: 60 },
  { label: "Kas", height: 88 },
];

const sideCards: {
  title: string;
  text: string;
  icon: LucideIcon;
  className: string;
}[] = [
  {
    title: "Akıllı İş Gücü Haritalama",
    text: "Yetkinlik, lokasyon, doluluk ve kritik rol riski görünür olur. İK planı sezgiyle değil, güncel veriyle yürür.",
    icon: Network,
    className: "md:col-span-2",
  },
  {
    title: "Özel Yazılım Çözümleri",
    text: "Hazır paketin karşılamadığı süreçler için uygulama tasarlanır, geliştirilir ve devreye alınır.",
    icon: Blocks,
    className: "md:col-span-2",
  },
];

export function Solutions() {
  return (
    <section id="cozumler" className="scroll-mt-24 py-20 sm:py-28">
      <div className={container}>
        <Reveal>
          <SectionHeading
            eyebrow="Çözümlerimiz"
            title="Karar vericinin ihtiyaç duyduğu yüzey"
            description="Dört başlıkta topluyoruz: yönetim ekranı, iş gücünün haritası, kuruma özel yazılım ve mevcut sistemlerle güvenli bağ."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-6">
          <Reveal className="md:col-span-4 md:row-span-2">
            <article className="panel flex h-full flex-col rounded-2xl p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#3B82F6]/15 text-[#3B82F6]">
                  <LayoutDashboard className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-white">Veri Analitiği Panelleri</h3>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
                    Yönetim ve operasyon ekipleri aynı göstergeleri, kendi rollerine göre görür.
                    Satış, maliyet, kapasite ve risk tek yüzeyde toplanır.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-1 flex-col justify-end rounded-xl border border-white/8 bg-black/20 p-4">
                <div className="mb-3 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Örnek gösterge</span>
                  <span>Aylık seyir</span>
                </div>
                <div className="flex h-28 items-end gap-3">
                  {months.map((month, index) => (
                    <div key={month.label} className="flex h-full flex-1 flex-col">
                      <div className="flex flex-1 items-end">
                        <span
                          className={`bar block w-full rounded-t-md ${index === months.length - 1 ? "bg-[#3B82F6]" : "bg-[#3B82F6]/35"}`}
                          style={{ height: `${month.height}px`, animationDelay: `${index * 70}ms` }}
                        />
                      </div>
                      <span className="mt-2 text-center text-[10px] text-slate-400">{month.label}</span>
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
              <article className="panel h-full rounded-2xl p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#3B82F6]/15 text-[#3B82F6]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-white">{card.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{card.text}</p>
              </article>
            </Reveal>
            );
          })}

          <Reveal delay={0.24} className="md:col-span-6">
            <article className="panel flex flex-col gap-6 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#3B82F6]/15 text-[#3B82F6]">
                  <Cable className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white">Güvenli Entegrasyon</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                    ERP, insan kaynakları, CRM ve veri ambarı bağlantıları, mevcut sistemi
                    değiştirmeden yeni bir karar katmanı ekler.
                  </p>
                </div>
              </div>
              <ul className="flex flex-wrap gap-2">
                {["ERP", "İK sistemleri", "CRM", "Veri ambarı"].map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-slate-300"
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
