import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import WhatsappFloat from "@/components/WhatsappFloat";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Avanço Ambiental | Consultoria Ambiental em Conselheiro Lafaiete - MG",
  description:
    "Consultoria ambiental completa: licenciamento, EIA/RIMA, outorga de recursos hídricos, gestão de resíduos, PRAD e CAR. Atendimento com proximidade e eficiência.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${fraunces.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-sand-100 text-ink-900">
        {children}
        <WhatsappFloat />
      </body>
    </html>
  );
}
