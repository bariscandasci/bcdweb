"use server";

import {
  readInquiryField,
  validateInquiry,
  type InquiryState,
} from "@/lib/inquiry";

export async function submitInquiry(
  _previous: InquiryState,
  formData: FormData,
): Promise<InquiryState> {
  const website = formData.get("website");
  if (typeof website === "string" && website.trim() !== "") {
    return {
      status: "success",
      message: "Talebiniz alındı. En kısa sürede sizinle iletişime geçeceğiz.",
    };
  }

  const input = {
    fullName: readInquiryField(formData, "fullName"),
    company: readInquiryField(formData, "company"),
    email: readInquiryField(formData, "email"),
    summary: readInquiryField(formData, "summary"),
  };

  const fieldErrors = validateInquiry(input);

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Lütfen işaretli alanları kontrol edin.",
      fieldErrors,
    };
  }

  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    status: "success",
    message: "Talebiniz alındı. En kısa sürede sizinle iletişime geçeceğiz.",
  };
}
