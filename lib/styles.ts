export const container = "mx-auto w-full max-w-7xl px-5 sm:px-6";

const buttonBase =
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl font-semibold no-underline transition disabled:cursor-not-allowed disabled:opacity-60";

export const primaryButton = `${buttonBase} bg-[#3B82F6] text-[#090D16] shadow-[0_10px_30px_rgba(59,130,246,0.22)] hover:bg-[#60A5FA]`;

export const primaryButtonMd = `${primaryButton} px-5 py-3 text-[15px]`;

export const primaryButtonSm = `${primaryButton} px-3.5 py-2 text-sm`;

export const secondaryButton = `${buttonBase} border border-white/15 bg-white/[0.04] text-white hover:border-white/30 hover:bg-white/[0.08]`;

export const secondaryButtonMd = `${secondaryButton} px-5 py-3 text-[15px]`;
