export const container = "mx-auto w-full max-w-7xl px-6";

const buttonBase =
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl font-semibold no-underline transition disabled:cursor-not-allowed disabled:opacity-60";

export const primaryButton = `${buttonBase} bg-[#D4AF37] text-[#050505] shadow-[0_10px_30px_rgba(212,175,55,0.22)] hover:bg-[#F3D59B]`;

export const primaryButtonMd = `${primaryButton} px-5 py-3 text-[15px]`;

export const primaryButtonSm = `${primaryButton} px-3.5 py-2 text-sm`;

export const secondaryButton = `${buttonBase} border border-white/15 bg-white/[0.04] text-white hover:border-white/30 hover:bg-white/[0.08]`;

export const secondaryButtonMd = `${secondaryButton} px-5 py-3 text-[15px]`;
