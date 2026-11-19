type LogoProps = {
  className?: string;
};

export function Logo({ className = "" }: LogoProps) {
  return (
    <a
      href="#hero"
      className={`inline-flex items-center gap-2.5 no-underline ${className}`}
      aria-label="BCD TECHNOLOGIES, sayfanın başına dön"
    >
      <span className="h-5 w-[3px] rounded-full bg-[#3B82F6]" aria-hidden="true" />
      <span className="text-[15px] font-semibold tracking-[-0.04em] text-white">
        BCD
        <span className="ml-1.5 text-[11px] font-medium tracking-[0.2em] text-slate-400">
          TECHNOLOGIES
        </span>
      </span>
    </a>
  );
}
