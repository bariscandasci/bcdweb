import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import type { ReactNode } from "react";
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
  themeColor: "#090D16",
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
      <body className={`${jakarta.className} min-h-full bg-[#090D16] text-[#F4F7FB]`}>
        <a href="#icerik" className="skip-link">
          İçeriğe geç
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
