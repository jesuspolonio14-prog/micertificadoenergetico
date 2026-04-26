import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://micertificadoenergetico.com"),
  title: {
    default: "Certificado Energético — Técnico habilitado · Madrid y Segovia",
    template: "%s | micertificadoenergetico.com",
  },
  description:
    "Certificado energético obligatorio para vender o alquilar tu vivienda. Elaborado con CE3x por técnico habilitado. Resultado en 48 h, registro oficial incluido. Madrid y Segovia.",
  keywords: [
    "certificado energetico madrid", "certificado energético segovia",
    "certificado energetico precio", "ce3x certificado energetico",
    "certificado energetico vivienda", "certificado energetico alquiler",
    "certificado energetico venta", "tecnico certificado energetico",
    "etiqueta energetica vivienda", "certificado energetico obligatorio",
  ],
  authors: [{ name: "Jesús Polonio — Técnico habilitado" }],
  creator: "micertificadoenergetico.com",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://micertificadoenergetico.com",
    siteName: "Mi Certificado Energético",
    title: "Certificado Energético — Técnico habilitado · Madrid y Segovia",
    description:
      "Certificado energético para vender o alquilar tu vivienda. CE3x, técnico habilitado, registro oficial incluido. Desde 89 €.",
    images: [
      {
        url: "/logo-mce.png",
        width: 512,
        height: 512,
        alt: "Mi Certificado Energético",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Certificado Energético — Técnico habilitado Madrid y Segovia",
    description: "CE3x, resultado en 48 h, registro oficial incluido. Desde 89 €.",
    images: ["/logo-mce.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://micertificadoenergetico.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
