export type InquiryField = "fullName" | "company" | "email" | "summary" | "solution" | "size";

export type InquiryErrorCode = "name" | "company" | "email" | "summary" | "solution" | "size";

export const solutionOptions = ["hr", "analytics", "software", "ai"] as const;
export const sizeOptions = ["1-50", "51-250", "251-1000", "1000+"] as const;

export type InquiryState = {
  status: "idle" | "success" | "error";
  message?: "received" | "check";
  fieldErrors?: Partial<Record<InquiryField, InquiryErrorCode>>;
};

export const initialInquiryState: InquiryState = { status: "idle" };

const limits: Record<InquiryField, number> = {
  fullName: 120,
  company: 160,
  email: 160,
  summary: 2000,
  solution: 32,
  size: 16,
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function readInquiryField(formData: FormData, field: InquiryField) {
  const value = formData.get(field);
  if (typeof value !== "string") return "";
  return value.trim().slice(0, limits[field]);
}

export function readChoice(formData: FormData, field: "solution" | "size", allowed: readonly string[]) {
  const value = formData.get(field);
  if (typeof value !== "string") return "";
  const trimmed = value.trim();
  return allowed.includes(trimmed) ? trimmed : "";
}

export function validateInquiry(input: Record<InquiryField, string>) {
  const fieldErrors: Partial<Record<InquiryField, InquiryErrorCode>> = {};

  if (input.fullName.length < 3) fieldErrors.fullName = "name";
  if (input.company.length < 2) fieldErrors.company = "company";
  if (!emailPattern.test(input.email)) fieldErrors.email = "email";
  if (input.summary.length < 20) fieldErrors.summary = "summary";
  if (!input.solution) fieldErrors.solution = "solution";
  if (!input.size) fieldErrors.size = "size";

  return fieldErrors;
}
