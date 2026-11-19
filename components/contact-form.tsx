"use client";

import { submitInquiry } from "@/app/actions";
import { initialInquiryState, type InquiryField } from "@/lib/inquiry";
import { secondaryButtonMd } from "@/lib/styles";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, X } from "lucide-react";
import { useActionState, useCallback, useEffect, useId, useRef, useState } from "react";

const fields: {
  id: InquiryField;
  label: string;
  autoComplete: string;
  maxLength: number;
  type?: string;
  multiline?: boolean;
}[] = [
  { id: "fullName", label: "Ad Soyad", autoComplete: "name", maxLength: 120 },
  { id: "company", label: "Kurum Adı", autoComplete: "organization", maxLength: 160 },
  { id: "email", label: "E-posta", autoComplete: "email", maxLength: 160, type: "email" },
  {
    id: "summary",
    label: "Proje / İhtiyaç Özeti",
    autoComplete: "off",
    maxLength: 2000,
    multiline: true,
  },
];

export function ContactForm() {
  const [version, setVersion] = useState(0);
  const [toast, setToast] = useState<string | null>(null);
  const onSuccess = useCallback((message: string) => setToast(message), []);
  const closeToast = useCallback(() => setToast(null), []);

  return (
    <>
      <InquiryForm
        key={version}
        onSuccess={onSuccess}
        onReset={() => setVersion((current) => current + 1)}
      />
      <Toast message={toast} onClose={closeToast} />
    </>
  );
}

function InquiryForm({
  onSuccess,
  onReset,
}: {
  onSuccess: (message: string) => void;
  onReset: () => void;
}) {
  const [state, formAction, isPending] = useActionState(submitInquiry, initialInquiryState);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const notified = useRef(false);

  useEffect(() => {
    if (state.status === "success" && state.message && !notified.current) {
      notified.current = true;
      onSuccess(state.message);
      headingRef.current?.focus();
    }
  }, [onSuccess, state]);

  useEffect(() => {
    if (state.status !== "error" || !state.fieldErrors) return;
    const firstInvalid = fields.find((field) => state.fieldErrors?.[field.id]);
    if (firstInvalid) document.getElementById(firstInvalid.id)?.focus();
  }, [state]);

  if (state.status === "success") {
    return (
      <div className="panel flex min-h-[28rem] flex-col justify-center rounded-2xl p-6 sm:p-8">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-[#D4AF37]/15 text-[#D4AF37]">
          <Check className="h-5 w-5" aria-hidden="true" />
        </span>
        <h3
          ref={headingRef}
          tabIndex={-1}
          className="mt-5 text-2xl font-semibold text-white outline-none"
        >
          Talebiniz alındı
        </h3>
        <p className="mt-3 max-w-md text-sm leading-6 text-[#C8C4BC]">{state.message}</p>
        <button type="button" className={`${secondaryButtonMd} mt-6 w-fit`} onClick={onReset}>
          Yeni bir talep oluştur
        </button>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate aria-busy={isPending} className="panel relative rounded-2xl p-6 sm:p-8">
      <fieldset className={`m-0 min-w-0 space-y-5 border-0 p-0 ${isPending ? "opacity-70" : ""}`}>
        <legend className="text-sm text-[#A1A1AA]">Tüm alanlar zorunludur.</legend>
        <div className="honeypot" aria-hidden="true">
          <label>
            Web sitesi
            <input name="website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>
        {fields.map((field) => (
          <Field
            key={field.id}
            field={field}
            error={state.fieldErrors?.[field.id]}
          />
        ))}
        {state.status === "error" && state.message ? (
          <p className="text-sm text-rose-300" role="alert">
            {state.message}
          </p>
        ) : null}
        <button
          type="submit"
          className="inline-flex w-full cursor-pointer items-center justify-center rounded-xl bg-[#D4AF37] px-5 py-3 text-[15px] font-semibold text-[#050505] transition hover:bg-[#F3D59B] disabled:cursor-not-allowed sm:w-auto"
        >
          {isPending ? "Gönderiliyor..." : "Toplantı Talebi Gönder"}
        </button>
      </fieldset>
    </form>
  );
}

function Field({
  field,
  error,
}: {
  field: (typeof fields)[number];
  error?: string;
}) {
  const errorId = `${field.id}-error`;
  const shared = {
    id: field.id,
    name: field.id,
    required: true,
    maxLength: field.maxLength,
    "aria-invalid": Boolean(error) || undefined,
    "aria-describedby": error ? errorId : undefined,
    className: "field",
  };

  return (
    <div>
      <label htmlFor={field.id} className="mb-2 block text-sm font-medium text-[#E4E4E7]">
        {field.label}
      </label>
      {field.multiline ? (
        <textarea
          {...shared}
          rows={5}
          autoComplete={field.autoComplete}
          placeholder="Kısaca kurumunuzu, hedeflediğiniz çıktıyı ve varsa mevcut sistemlerinizi yazın."
        />
      ) : (
        <input
          {...shared}
          type={field.type ?? "text"}
          autoComplete={field.autoComplete}
        />
      )}
      {error ? (
        <p id={errorId} className="mt-2 text-sm text-rose-300">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function Toast({ message, onClose }: { message: string | null; onClose: () => void }) {
  const reduce = useReducedMotion();
  const titleId = useId();

  useEffect(() => {
    if (!message) return;
    const timeout = window.setTimeout(onClose, 4800);
    return () => window.clearTimeout(timeout);
  }, [message, onClose]);

  return (
    <AnimatePresence>
      {message ? (
        <motion.div
          role="status"
          aria-labelledby={titleId}
          className="fixed right-4 bottom-4 left-4 z-[70] flex items-start gap-3 rounded-2xl border border-white/10 bg-[#101624]/95 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.4)] backdrop-blur-xl sm:left-auto sm:w-[22rem]"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: 8 }}
        >
          <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#D4AF37]/15 text-[#D4AF37]">
            <Check className="h-4 w-4" aria-hidden="true" />
          </span>
          <p id={titleId} className="flex-1 text-sm leading-6 text-[#F4F4F5]">
            {message}
          </p>
          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer rounded-md p-1 text-[#A1A1AA] hover:text-white"
            aria-label="Bildirimi kapat"
          >
            <X className="h-4 w-4" />
          </button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
