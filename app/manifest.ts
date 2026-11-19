import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BCD TECHNOLOGIES",
    short_name: "BCD TECHNOLOGIES",
    description:
      "Kurumsal firmalar için veri analitiği panelleri, akıllı iş gücü haritalama sistemleri ve özel yazılım çözümleri.",
    start_url: "/",
    display: "standalone",
    background_color: "#050505",
    theme_color: "#050505",
    lang: "tr",
  };
}
