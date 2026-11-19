import { Reveal } from "@/components/reveal";
import { container } from "@/lib/styles";

const statements = [
  {
    title: "Misyonumuz",
    text: "İşletmelerin karmaşık insan kaynakları, saha operasyonu ve veri süreçlerini; yüksek performanslı analitik paneller, coğrafi bilgi sistemleri ve yapay zeka tabanlı yazılımlarla sadeleştirerek ölçülebilir verimlilik sağlamak.",
  },
  {
    title: "Vizyonumuz",
    text: "Kurumsal yazılım ve veri zekâsı alanında geliştirdiği yenilikçi ürünlerle Türkiye'den çıkan öncü teknoloji şirketlerinden biri olmak ve işletmelerin dijital dönüşüm standartlarını belirlemek.",
  },
];

export function Vision() {
  return (
    <section id="vizyon" className="scroll-mt-24 pb-20 sm:pb-28">
      <div className={container}>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-[#2A2418] bg-[#111114] px-6 py-10 sm:px-10 sm:py-12">
            <div
              className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#E5C17B] to-transparent"
              aria-hidden="true"
            />
            <p className="text-sm font-semibold tracking-[0.16em] text-[#E5C17B] uppercase">
              Vizyon & Misyon
            </p>
            <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-12">
              {statements.map((statement) => (
                <article key={statement.title}>
                  <h2 className="text-2xl font-semibold tracking-tight text-white">{statement.title}</h2>
                  <p className="mt-4 text-base leading-7 text-[#A1A1AA]">{statement.text}</p>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
