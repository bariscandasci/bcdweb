type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold text-[#D4AF37]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-pretty text-[#A1A1AA]">{description}</p>
    </div>
  );
}
