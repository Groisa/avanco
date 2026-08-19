import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import WhatsappFloat from "@/components/WhatsappFloat";
import { getSiteSettings, getServices } from "@/lib/content";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const SITE_URL = "https://www.avancoambiental.com.br";

export async function generateMetadata(): Promise<Metadata> {
  const [{ site }, services] = await Promise.all([getSiteSettings(), getServices()]);

  const title = `${site.name} | Consultoria Ambiental em Conselheiro Lafaiete - MG`;
  const description = `${site.tagline}. Licenciamento ambiental, EIA/RIMA, outorga de recursos hídricos, gestão de resíduos, PRAD, CAR e mais ${services.length} serviços ambientais em Minas Gerais.`;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: title,
      template: `%s | ${site.name}`,
    },
    description,
    keywords: [
      "consultoria ambiental",
      "licenciamento ambiental",
      "EIA/RIMA",
      "outorga de recursos hídricos",
      "CAR",
      "PRAD",
      "gestão de resíduos",
      "Conselheiro Lafaiete",
      "Minas Gerais",
    ],
    authors: [{ name: site.name }],
    applicationName: site.name,
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      url: SITE_URL,
      siteName: site.name,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
      },
    },
  };
}

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
