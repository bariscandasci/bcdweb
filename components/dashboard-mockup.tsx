"use client";

import { motion, useReducedMotion } from "framer-motion";

const nodes = [
  { x: 78, y: 92, label: "Operasyon", anchor: "middle" as const },
  { x: 188, y: 48, label: "Satış", anchor: "middle" as const },
  { x: 318, y: 78, label: "Finans", anchor: "middle" as const },
  { x: 112, y: 188, label: "Saha", anchor: "middle" as const },
  { x: 300, y: 186, label: "İK", anchor: "middle" as const },
];

const hub = { x: 214, y: 128 };

const coverage = [
  { name: "Operasyon", value: 86 },
  { name: "Saha", value: 78 },
  { name: "Satış", value: 71 },
  { name: "Finans", value: 54 },
  { name: "İK", value: 46 },
];

const stats = [
  { value: "1.284", label: "Görünen çalışan" },
  { value: "%92", label: "Planlı doluluk" },
  { value: "14", label: "Kritik rol" },
];

export function DashboardMockup() {
  const reduce = useReducedMotion();

  return (
    <motion.figure
      data-reveal
      className="relative"
      initial={reduce ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={
        reduce ? { duration: 0 } : { duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }
      }
    >
      <div
        className="pointer-events-none absolute -inset-8 -z-10 rounded-[2rem] bg-[#3B82F6]/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="panel overflow-hidden rounded-2xl">
        <figcaption className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-5">
          <div className="flex min-w-0 items-center gap-3">
            <span className="flex gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            </span>
            <span className="truncate text-sm font-medium text-slate-100">İş Gücü Haritası</span>
          </div>
          <span className="shrink-0 rounded-full border border-[#3B82F6]/30 bg-[#3B82F6]/10 px-2.5 py-1 text-[11px] font-medium text-[#93C5FD]">
            Örnek panel
          </span>
        </figcaption>

        <div className="grid grid-cols-3 gap-2 px-4 pt-4 sm:px-5">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-xl border border-white/8 bg-black/20 px-2.5 py-3 sm:px-3">
              <p className="text-lg font-semibold tracking-tight text-white tabular-nums sm:text-xl">
                {stat.value}
              </p>
              <p className="mt-1 text-[11px] leading-4 text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-4 px-4 py-4 sm:px-5 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="rounded-xl border border-white/8 bg-black/20 p-2" aria-hidden="true">
            <svg viewBox="0 0 400 240" className="h-[210px] w-full font-sans sm:h-[230px]">
              <circle cx="214" cy="128" r="78" fill="none" stroke="white" strokeOpacity="0.06" />
              <circle cx="214" cy="128" r="118" fill="none" stroke="white" strokeOpacity="0.05" />
              {nodes.map((node) => (
                <line
                  key={node.label}
                  x1={hub.x}
                  y1={hub.y}
                  x2={node.x}
                  y2={node.y}
                  stroke="#3B82F6"
                  strokeOpacity="0.55"
                  strokeWidth="1.4"
                />
              ))}
              {nodes.map((node) => (
                <g key={node.label}>
                  <circle cx={node.x} cy={node.y} r="5" fill="#3B82F6" />
                  <text
                    x={node.x}
                    y={node.y - 14}
                    textAnchor={node.anchor}
                    fill="#E2E8F0"
                    fontSize="12"
                  >
                    {node.label}
                  </text>
                </g>
              ))}
              <circle cx={hub.x} cy={hub.y} r="8" fill="none" stroke="#3B82F6" className="pulse-ring" />
              <circle cx={hub.x} cy={hub.y} r="6" fill="#3B82F6" />
              <text x={hub.x} y={hub.y + 24} textAnchor="middle" fill="#93C5FD" fontSize="12">
                Merkez
              </text>
            </svg>
          </div>

          <div className="flex flex-col justify-center rounded-xl border border-white/8 bg-black/20 px-3 py-3">
            <p className="mb-3 text-[11px] font-medium tracking-wide text-slate-400">Birim kapsamı</p>
            <ul className="space-y-3">
              {coverage.map((item, index) => (
                <li key={item.name}>
                  <div className="mb-1 flex items-center justify-between text-[11px] text-slate-300">
                    <span>{item.name}</span>
                    <span className="tabular-nums text-slate-400">%{item.value}</span>
                  </div>
                  <div className="meter h-1.5 overflow-hidden rounded-full bg-white/10">
                    <span
                      className="block h-full rounded-full bg-[#3B82F6]"
                      style={{
                        width: `${item.value}%`,
                        animationDelay: `${index * 80}ms`,
                      }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="border-t border-white/10 px-4 py-3 text-[11px] leading-5 text-slate-400 sm:px-5">
          Gösterilen değerler örnek arayüze aittir. Canlı müşteri verisi içermez.
        </p>
      </div>
    </motion.figure>
  );
}
