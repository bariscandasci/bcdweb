"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Activity, Radio } from "lucide-react";
import { useId, useState } from "react";

type TabId = "ik" | "ops" | "ai";

type City = {
  name: string;
  value: string;
};

type Place = {
  x: number;
  y: number;
  lx: number;
  ly: number;
  anchor: "start" | "middle" | "end";
};

type Panel = {
  id: TabId;
  label: string;
  kicker: string;
  stats: { value: string; label: string }[];
  cities: City[];
  bars: { name: string; value: number }[];
};

const panels: Panel[] = [
  {
    id: "ik",
    label: "İK Haritalama",
    kicker: "Yetkinlik ve doluluk",
    stats: [
      { value: "1.284", label: "Görünen çalışan" },
      { value: "%92", label: "Planlı doluluk" },
      { value: "14", label: "Kritik rol" },
    ],
    cities: [
      { name: "İstanbul", value: "842" },
      { name: "Bursa", value: "128" },
      { name: "İzmir", value: "204" },
      { name: "Ankara", value: "316" },
      { name: "Antalya", value: "96" },
    ],
    bars: [
      { name: "Yetkinlik", value: 82 },
      { name: "Doluluk", value: 91 },
      { name: "Kritik rol", value: 46 },
      { name: "Devir", value: 28 },
      { name: "Uzaktan", value: 63 },
    ],
  },
  {
    id: "ops",
    label: "Operasyon Analitiği",
    kicker: "Kapasite ve akış",
    stats: [
      { value: "%96", label: "Kapasite" },
      { value: "18 dk", label: "Ort. akış" },
      { value: "7", label: "İzlenen tesis" },
    ],
    cities: [
      { name: "İstanbul", value: "96" },
      { name: "Kocaeli", value: "88" },
      { name: "Ankara", value: "74" },
      { name: "Adana", value: "69" },
      { name: "Gaziantep", value: "81" },
      { name: "Trabzon", value: "64" },
    ],
    bars: [
      { name: "Üretim", value: 88 },
      { name: "Sevkiyat", value: 74 },
      { name: "Enerji", value: 61 },
      { name: "Arıza", value: 22 },
      { name: "Kapasite", value: 93 },
    ],
  },
  {
    id: "ai",
    label: "Yapay Zeka Otomasyonu",
    kicker: "Öneri ve onay kuyruğu",
    stats: [
      { value: "126", label: "Açık öneri" },
      { value: "%41", label: "Otomatik adım" },
      { value: "9", label: "Onay bekleyen" },
    ],
    cities: [
      { name: "İstanbul", value: "48" },
      { name: "Bursa", value: "17" },
      { name: "Eskişehir", value: "22" },
      { name: "Ankara", value: "31" },
      { name: "İzmir", value: "19" },
    ],
    bars: [
      { name: "Eşleşme", value: 77 },
      { name: "Öneri", value: 84 },
      { name: "Onay", value: 58 },
      { name: "Tasarruf", value: 69 },
      { name: "Kuyruk", value: 35 },
    ],
  },
];

const places: Record<string, Place> = {
  İstanbul: { x: 169, y: 86, lx: -12, ly: -16, anchor: "end" },
  Kocaeli: { x: 219, y: 102, lx: 12, ly: -8, anchor: "start" },
  Bursa: { x: 173, y: 138, lx: 12, ly: 6, anchor: "start" },
  Eskişehir: { x: 248, y: 163, lx: 0, ly: 30, anchor: "middle" },
  İzmir: { x: 86, y: 246, lx: 12, ly: -6, anchor: "start" },
  Ankara: { x: 368, y: 154, lx: 12, ly: -8, anchor: "start" },
  Antalya: { x: 258, y: 332, lx: 0, ly: -16, anchor: "middle" },
  Adana: { x: 495, y: 322, lx: 0, ly: -16, anchor: "middle" },
  Gaziantep: { x: 600, y: 316, lx: 12, ly: 4, anchor: "start" },
  Trabzon: { x: 708, y: 96, lx: 0, ly: -16, anchor: "middle" },
};

const turkeyPath =
  "M118.3 17.6 L172.2 64.6 L187.7 67.1 L200.5 67.1 L293.1 65.8 L323.9 49.5 L401 31.3 L485.9 13.8 L539.8 50.1 L557.8 60.8 L601.5 70.8 L647.8 77.1 L720.8 78.4 L760.9 75.2 L807.2 53.3 L843.2 43.9 L894.6 50.1 L910 72.1 L943.4 106.6 L982 156.7 L969.2 194.3 L956.3 235.1 L966.6 294.6 L925.4 319.7 L879.2 310.3 L827.8 316.6 L771.2 326 L694.1 338.5 L642.7 347.9 L570.7 357.3 L539.8 382.4 L532.1 399.3 L524.4 379.3 L537.3 355.4 L524.4 344.8 L473 344.8 L455 347.9 L416.5 373 L367.6 390.5 L334.2 376.1 L293.1 357.3 L257.1 341.6 L231.4 357.3 L185.1 376.1 L174.8 352.9 L131.1 344.8 L87.4 332.2 L69.4 310.3 L77.1 285.2 L59.1 263.3 L30.8 250.7 L54 238.2 L43.7 222.5 L51.4 197.5 L41.1 184.9 L23.1 169.3 L23.1 137.9 L25.7 122.2 L18 103.4 L25.7 69 L36 34.5 L66.8 25.1 L90 17.6 Z";

export function DashboardMockup() {
  const reduce = useReducedMotion();
  const [tab, setTab] = useState<TabId>("ik");
  const [straight, setStraight] = useState(false);
  const baseId = useId();
  const active = panels.find((panel) => panel.id === tab) ?? panels[0];
  const hub = places.Ankara;

  return (
    <div className="relative flex min-w-0 flex-col lg:h-[min(700px,calc(100svh-5.5rem))]">
      <motion.aside
        className="pointer-events-none relative z-20 -mb-3 ml-2 hidden w-60 rounded-2xl border border-cyan-300/20 bg-[#0B1220]/90 p-3 shadow-[0_16px_40px_rgba(0,0,0,0.35)] backdrop-blur-md lg:block"
        animate={reduce ? undefined : { y: [0, -7, 0] }}
        transition={reduce ? undefined : { duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <p className="flex items-center gap-1.5 text-[11px] text-cyan-200">
          <Activity className="h-3.5 w-3.5" aria-hidden="true" />
          Örnek sinyal
        </p>
        <p className="mt-1 text-sm font-semibold text-white">+%34 Operasyonel Verimlilik</p>
      </motion.aside>

      <div className="mb-3 grid grid-cols-2 gap-2 lg:hidden">
        <p className="rounded-xl border border-cyan-300/20 bg-[#0B1220]/80 px-3 py-2 text-xs font-semibold text-white">
          +%34 Operasyonel Verimlilik
        </p>
        <p className="rounded-xl border border-white/10 bg-[#0B1220]/80 px-3 py-2 text-xs font-medium text-slate-200">
          Canlı Veri Senkronizasyonu Aktif
        </p>
      </div>

      <motion.figure
        className="relative min-h-0 flex-1"
        style={{ perspective: 1400 }}
        onMouseEnter={() => setStraight(true)}
        onMouseLeave={() => setStraight(false)}
      >
        <motion.div
          className="h-full"
          animate={
            reduce
              ? { rotateX: 0, rotateY: 0 }
              : straight
                ? { rotateX: 0, rotateY: 0 }
                : { rotateX: 7, rotateY: -11 }
          }
          transition={{ type: "spring", stiffness: 180, damping: 22 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="panel flex h-full flex-col overflow-hidden rounded-2xl">
            <figcaption className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-white">Canlı Komuta Merkezi</p>
                <p className="text-[11px] text-slate-400">{active.kicker}</p>
              </div>
              <span className="shrink-0 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-2.5 py-1 text-[11px] font-medium text-cyan-100">
                Örnek panel
              </span>
            </figcaption>

            <div
              role="tablist"
              aria-label="Komuta merkezi görünümleri"
              className="flex gap-1 overflow-x-auto border-b border-white/10 px-3 py-2"
            >
              {panels.map((panel) => {
                const selected = panel.id === active.id;
                return (
                  <button
                    key={panel.id}
                    id={`${baseId}-${panel.id}`}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    aria-controls={`${baseId}-panel-${panel.id}`}
                    onClick={() => setTab(panel.id)}
                    className={`shrink-0 cursor-pointer rounded-lg px-3 py-1.5 text-xs font-semibold transition sm:text-[13px] ${
                      selected
                        ? "bg-[#3B82F6] text-[#090D16]"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {panel.label}
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active.id}
                id={`${baseId}-panel-${active.id}`}
                role="tabpanel"
                aria-labelledby={`${baseId}-${active.id}`}
                className="flex min-h-0 flex-1 flex-col"
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="grid grid-cols-3 gap-2 px-3 pt-3">
                  {active.stats.map((stat) => (
                    <div key={stat.label} className="rounded-xl border border-white/10 bg-black/25 px-2.5 py-2">
                      <p className="text-base font-semibold tracking-tight text-white tabular-nums sm:text-lg">
                        {stat.value}
                      </p>
                      <p className="mt-0.5 text-[10px] leading-4 text-slate-400 sm:text-[11px]">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="grid min-h-0 flex-1 gap-3 px-3 py-3 lg:grid-cols-[1.35fr_0.8fr]">
                  <div className="relative min-h-[180px] overflow-hidden rounded-xl border border-white/10 bg-black/25">
                    <svg viewBox="-16 -46 1040 480" className="h-full w-full font-sans">
                      <path d={turkeyPath} fill="rgba(59,130,246,0.16)" stroke="rgba(125,211,252,0.9)" strokeWidth="3.2" strokeLinejoin="round" />
                      {active.cities.map((city) => {
                        const place = places[city.name];
                        return (
                          <line
                            key={`${city.name}-link`}
                            x1={hub.x}
                            y1={hub.y}
                            x2={place.x}
                            y2={place.y}
                            stroke="#67E8F9"
                            strokeOpacity="0.4"
                            strokeWidth="1.6"
                          />
                        );
                      })}
                      {active.cities.map((city) => {
                        const place = places[city.name];
                        return (
                          <g key={city.name}>
                            <circle cx={place.x} cy={place.y} r="14" fill="none" stroke="#67E8F9" strokeWidth="2" className="pulse-ring" />
                            <circle cx={place.x} cy={place.y} r="5.5" fill="#67E8F9" />
                            <text
                              x={place.x + place.lx}
                              y={place.y + place.ly}
                              textAnchor={place.anchor}
                              fill="#F8FAFC"
                              fontSize="24"
                              stroke="#07111C"
                              strokeWidth="5"
                              paintOrder="stroke"
                            >
                              {city.name}
                            </text>
                            <text
                              x={place.x + place.lx}
                              y={place.y + place.ly + 20}
                              textAnchor={place.anchor}
                              fill="#67E8F9"
                              fontSize="18"
                              stroke="#07111C"
                              strokeWidth="4"
                              paintOrder="stroke"
                            >
                              {city.value}
                            </text>
                          </g>
                        );
                      })}
                    </svg>
                  </div>

                  <div className="flex flex-col justify-center rounded-xl border border-white/10 bg-black/25 px-3 py-3">
                    <p className="mb-3 text-[11px] font-medium text-slate-400">Gösterge dağılımı</p>
                    <ul className="space-y-2.5">
                      {active.bars.map((item, index) => (
                        <li key={item.name}>
                          <div className="mb-1 flex items-center justify-between text-[11px] text-slate-300">
                            <span>{item.name}</span>
                            <span className="tabular-nums text-slate-400">%{item.value}</span>
                          </div>
                          <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                            <motion.span
                              className="block h-full rounded-full bg-[#3B82F6]"
                              initial={reduce ? false : { width: 0 }}
                              animate={{ width: `${item.value}%` }}
                              transition={{ duration: 0.55, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                            />
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <p className="border-t border-white/10 px-4 py-2.5 text-[11px] leading-5 text-slate-400">
              Gösterilen değerler örnek arayüze aittir. Canlı müşteri verisi içermez.
            </p>
          </div>
        </motion.div>
      </motion.figure>

      <motion.aside
        className="pointer-events-none relative z-20 -mt-3 mr-4 ml-auto hidden w-64 rounded-2xl border border-white/10 bg-[#0B1220]/90 p-3 shadow-[0_16px_40px_rgba(0,0,0,0.35)] backdrop-blur-md lg:block"
        animate={reduce ? undefined : { y: [0, 8, 0] }}
        transition={reduce ? undefined : { duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <p className="flex items-center gap-2 text-sm font-medium text-white">
          <span className="relative grid h-2.5 w-2.5 place-items-center" aria-hidden="true">
            <span className="absolute h-2.5 w-2.5 rounded-full bg-cyan-300/40 pulse-ring" />
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
          </span>
          Canlı Veri Senkronizasyonu Aktif
        </p>
        <p className="mt-1 flex items-center gap-1 text-[11px] text-slate-400">
          <Radio className="h-3 w-3" aria-hidden="true" />
          Örnek panel durumu
        </p>
      </motion.aside>
    </div>
  );
}
