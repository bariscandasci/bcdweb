export type InquiryField = "fullName" | "company" | "email" | "summary";

export type InquiryState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<InquiryField, string>>;
};

export const initialInquiryState: InquiryState = { status: "idle" };

const limits: Record<InquiryField, number> = {
  fullName: 120,
  company: 160,
  email: 160,
  summary: 2000,
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function readInquiryField(formData: FormData, field: InquiryField) {
  const value = formData.get(field);
  if (typeof value !== "string") return "";
  return value.trim().slice(0, limits[field]);
}

export function validateInquiry(input: Record<InquiryField, string>) {
  const fieldErrors: Partial<Record<InquiryField, string>> = {};

  if (input.fullName.length < 3) {
    fieldErrors.fullName = "Ad soyad en az 3 karakter olmalıdır.";
  }

  if (input.company.length < 2) {
    fieldErrors.company = "Kurum adını girin.";
  }

  if (!emailPattern.test(input.email)) {
    fieldErrors.email = "Geçerli bir e-posta adresi girin.";
  }

  if (input.summary.length < 20) {
    fieldErrors.summary = "İhtiyacınızı en az 20 karakterle özetleyin.";
  }

  return fieldErrors;
}
