import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sourceSerif = Source_Serif_4({ 
  subsets: ["latin"], 
  style: ['normal', 'italic'],
  variable: "--font-serif" 
});

export const metadata: Metadata = {
  title: "M&M Gestión y Administración",
  description: "Firma legal especializada en defensa técnica y representación administrativa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${sourceSerif.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}