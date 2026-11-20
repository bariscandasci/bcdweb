"use client";

import { submitInquiry } from "@/app/actions";
import { useCopy } from "@/components/locale";
import { initialInquiryState, type InquiryErrorCode, type InquiryField } from "@/lib/inquiry";
import { secondaryButtonMd } from "@/lib/styles";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, X } from "lucide-react";
import { useActionState, useCallback, useEffect, useId, useRef, useState } from "react";

const textFields: {
  id: Exclude<InquiryField, "solution" | "size">;
  autoComplete: string;
  maxLength: number;
  type?: string;
  multiline?: boolean;
}[] = [
  { id: "fullName", autoComplete: "name", maxLength: 120 },
  { id: "company", autoComplete: "organization", maxLength: 160 },
  { id: "email", autoComplete: "email", maxLength: 160, type: "email" },
  { id: "summary", autoComplete: "off", maxLength: 2000, multiline: true },
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
  const { copy } = useCopy();
  const form = copy.form;
  const [state, formAction, isPending] = useActionState(submitInquiry, initialInquiryState);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const notified = useRef(false);

  useEffect(() => {
    if (state.status === "success" && state.message && !notified.current) {
      notified.current = true;
      onSuccess(form.successBody);
      headingRef.current?.focus();
    }
  }, [form.successBody, onSuccess, state]);

  useEffect(() => {
    if (state.status !== "error" || !state.fieldErrors) return;
    const firstInvalid = textFields.find((field) => state.fieldErrors?.[field.id]);
    if (firstInvalid) {
      document.getElementById(firstInvalid.id)?.focus();
      return;
    }
    const choice = (["solution", "size"] as const).find((field) => state.fieldErrors?.[field]);
    if (choice) document.querySelector<HTMLInputElement>(`input[name="${choice}"]`)?.focus();
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
          {form.successTitle}
        </h3>
        <p className="mt-3 max-w-md text-sm leading-6 text-[#C8C4BC]">{form.successBody}</p>
        <button type="button" className={`${secondaryButtonMd} mt-6 w-fit`} onClick={onReset}>
          {form.reset}
        </button>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate aria-busy={isPending} className="panel relative rounded-2xl p-6 sm:p-8">
      <fieldset className={`m-0 min-w-0 space-y-5 border-0 p-0 ${isPending ? "opacity-70" : ""}`}>
        <legend className="text-sm text-[#A1A1AA]">{form.legend}</legend>
        <div className="honeypot" aria-hidden="true">
          <label>
            {form.honeypot}
            <input name="website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>
        {textFields.map((field) => (
          <Field
            key={field.id}
            field={field}
            label={labelFor(form, field.id)}
            placeholder={field.multiline ? form.placeholder : undefined}
            error={errorText(form, state.fieldErrors?.[field.id])}
          />
        ))}
        <ChoiceGroup
          name="solution"
          legend={form.solution}
          options={form.solutions}
          error={errorText(form, state.fieldErrors?.solution)}
        />
        <ChoiceGroup
          name="size"
          legend={form.size}
          options={form.sizes}
          error={errorText(form, state.fieldErrors?.size)}
        />
        {state.status === "error" && state.message ? (
          <p className="text-sm text-rose-300" role="alert">
            {form.check}
          </p>
        ) : null}
        <button
          type="submit"
          className="inline-flex w-full cursor-pointer items-center justify-center rounded-xl bg-[#D4AF37] px-5 py-3 text-[15px] font-semibold text-[#050505] transition hover:bg-[#F3D59B] disabled:cursor-not-allowed sm:w-auto"
        >
          {isPending ? form.pending : form.submit}
        </button>
      </fieldset>
    </form>
  );
}

function labelFor(form: ReturnType<typeof useCopy>["copy"]["form"], id: (typeof textFields)[number]["id"]) {
  if (id === "fullName") return form.name;
  if (id === "company") return form.company;
  if (id === "email") return form.email;
  return form.summary;
}

function errorText(
  form: ReturnType<typeof useCopy>["copy"]["form"],
  code?: InquiryErrorCode,
) {
  return code ? form.errors[code] : undefined;
}

function ChoiceGroup({
  name,
  legend,
  options,
  error,
}: {
  name: "solution" | "size";
  legend: string;
  options: { id: string; label: string }[];
  error?: string;
}) {
  const errorId = `${name}-error`;
  return (
    <fieldset aria-describedby={error ? errorId : undefined}>
      <legend className="mb-2 text-sm font-medium text-[#E4E4E7]">{legend}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <label
            key={option.id}
            className="cursor-pointer rounded-full border border-[#2A2418] px-3 py-2 text-sm text-[#C8C4BC] transition has-[:checked]:border-[#D4AF37] has-[:checked]:bg-[#D4AF37]/15 has-[:checked]:text-white has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-[#E5C17B] hover:border-[#E5C17B]/50"
          >
            <input type="radio" name={name} value={option.id} className="sr-only" />
            {option.label}
          </label>
        ))}
      </div>
      {error ? (
        <p id={errorId} className="mt-2 text-sm text-rose-300">
          {error}
        </p>
      ) : null}
    </fieldset>
  );
}

function Field({
  field,
  label,
  placeholder,
  error,
}: {
  field: (typeof textFields)[number];
  label: string;
  placeholder?: string;
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
        {label}
      </label>
      {field.multiline ? (
        <textarea
          {...shared}
          rows={5}
          autoComplete={field.autoComplete}
          placeholder={placeholder}
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
  const { copy } = useCopy();
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
            aria-label={copy.form.close}
          >
            <X className="h-4 w-4" />
          </button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
