import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

// 1. Configuramos la tipografía para textos y párrafos (Moderna y legible)
const sansFont = Inter({
  subsets: ["latin"],
  variable: "--font-sans", // Creamos una variable CSS para Tailwind
  display: "swap",
});

// 2. Configuramos la tipografía para títulos (Elegante y corporativa)
const serifFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif", // Creamos otra variable CSS
  display: "swap",
});

export const metadata: Metadata = {
  title: "M&M Gestión y Administración",
  description: "Firma legal especializada en defensa técnica, cumplimiento normativo y resolución de controversias.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 3. Inyectamos las variables de las fuentes en la etiqueta HTML base
    <html lang="es" className={`${sansFont.variable} ${serifFont.variable}`}>
      {/* 4. Aplicamos font-sans por defecto a todo el cuerpo de la página */}
      <body className="font-sans antialiased text-white">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}