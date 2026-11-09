import { content } from "@/config/content";
import type { Metadata } from "next";
import localFont from "next/font/local";
import type { CSSProperties } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Concierge } from "@/components/concierge/concierge";
import { MotionProvider } from "@/components/motion/reveal";
import { clinic } from "@/config/clinic";
import { theme } from "@/config/theme";
import { media } from "@/config/media";
import "./globals.css";
const copy = content.seo;

const sans = localFont({
  src: "../../node_modules/@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2",
  variable: "--font-interface",
  display: "swap",
});
const origin = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
export const metadata: Metadata = {
  metadataBase: new URL(origin),
  title: {
    default: copy.title,
    template: copy.titleTemplate,
  },
  description: clinic.description,
  robots: { index: !clinic.demo, follow: !clinic.demo },
  icons: { icon: media.brand.favicon },
  openGraph: {
    title: copy.title,
    description: copy.esteticaEquilibrioEUmCuidadoQue,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: media.social.src,
        width: media.social.width,
        height: media.social.height,
        alt: media.social.alt,
      },
    ],
  },
  twitter: { card: "summary_large_image" },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const tokens = {
    ...Object.fromEntries(
      Object.entries(theme.colors).map(([key, value]) => [
        `--clinic-${key.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`)}`,
        value,
      ]),
    ),
    "--clinic-color-scheme": theme.colorScheme,
  } as CSSProperties;
  return (
    <html lang="pt-BR" className={sans.variable} style={tokens}>
      <body>
        <MotionProvider>
          <a className="skip-link" href="#main">
            {copy.pularParaOConteudo}
          </a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <Concierge />
        </MotionProvider>
      </body>
    </html>
  );
}
