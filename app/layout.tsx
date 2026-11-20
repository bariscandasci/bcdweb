import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import type { ReactNode } from "react";
import { AmbientField } from "@/components/ambient-field";
import { LocaleProvider, SkipLink } from "@/components/locale";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-jakarta",
});

const description =
  "Kurumsal firmalar için veri analitiği panelleri, akıllı iş gücü haritalama sistemleri ve özel yazılım çözümleri geliştiriyoruz.";

export const metadata: Metadata = {
  title: "BCD TECHNOLOGIES | Veri Analitiği, İş Gücü Haritalama ve Özel Yazılım",
  description,
  applicationName: "BCD TECHNOLOGIES",
  authors: [{ name: "BCD TECHNOLOGIES" }],
  creator: "BCD TECHNOLOGIES",
  keywords: [
    "BCD TECHNOLOGIES",
    "veri analitiği",
    "iş gücü haritalama",
    "İK analitiği",
    "kurumsal yazılım",
    "özel yazılım",
    "operasyon paneli",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "BCD TECHNOLOGIES | Veri Analitiği, İş Gücü Haritalama ve Özel Yazılım",
    description,
    locale: "tr_TR",
    type: "website",
    siteName: "BCD TECHNOLOGIES",
  },
  twitter: {
    card: "summary_large_image",
    title: "BCD TECHNOLOGIES",
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "BCD TECHNOLOGIES",
  description,
  email: "iletisim@bcdtechnologies.com",
  knowsAbout: ["Veri analitiği", "İş gücü haritalama", "Kurumsal yazılım"],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="tr" className={`${jakarta.variable} h-full antialiased`}>
      <body className={`${jakarta.className} min-h-full bg-[#050505] text-white`}>
        <AmbientField />
        <div className="relative z-10">
          <LocaleProvider>
          <SkipLink />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
            }}
          />
          {children}
          </LocaleProvider>
        </div>
      </body>
    </html>
  );
}
