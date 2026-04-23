import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mi Certificado Energético — Técnico habilitado en Segovia",
  description:
    "Certificado energético para vender o alquilar tu vivienda. Elaborado con CE3x por técnico habilitado. Resultado en 48 h, registro oficial incluido.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
