import Image from "next/image";

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
      <span className="relative block h-11 w-16 shrink-0 overflow-hidden">
        <Image
          src="/images/bcd-logo.jpeg"
          alt=""
          width={1024}
          height={1024}
          priority
          className="mix-blend-lighten object-cover object-top"
          style={{ width: "100%", height: "100%" }}
        />
      </span>
      <span className="text-[13px] font-semibold tracking-[0.16em] text-white sm:text-[15px]">
        BCD
        <span className="ml-1.5 font-medium tracking-[0.18em] text-[#A1A1AA]">TECHNOLOGIES</span>
      </span>
    </a>
  );
}
