import type { Metadata } from "next";
import { Rajdhani, Space_Grotesk } from "next/font/google";
import { CartProvider } from "@/context/CartContext";
import "./globals.css";

const displayFont = Rajdhani({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const bodyFont = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "ByteMarket | Hardware y Componentes",
  description:
    "Tienda frontend de hardware y componentes de computadora construida con Next.js y React.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="min-h-screen bg-slate-950 font-[family-name:var(--font-body)] text-slate-50 antialiased">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
