import "@/app/globals.css";
import { Inter } from "next/font/google";

import { LastUpdated, Layout, Navbar } from "nextra-theme-docs";
import { getPageMap } from "nextra/page-map";

import "nextra-theme-docs/style.css";
import type { ChildrenNode } from "@/types/ChildrenNode";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { BackgroundBlobs } from "@/components/BackgroundBlobs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodingLabs - Documentazioni",
  description: "Diventa uno sviluppatore, studiando in italiano.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo/logo-dark.svg",
      },

      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo/logo-light.svg",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },

  verification: {
    google: "1quHgETRe6wnQdGZME0gv2OaIlkwTofowNqYimM9o4k",
  },
};

const navbar = (
  <Navbar
    className="md:px-20! lg:px-40!"
    logo={<p className="text-accent-foreground font-bold">CodingLabs - Documentazioni</p>}
  />
);

export default async function DocsLayout({ children }: ChildrenNode) {
  const pageMap = await getPageMap("/documentazione/tailwindcss");

  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={`${inter.className} bg-background relative text-foreground dark flex flex-col max-w-screen`}>
        <BackgroundBlobs />
        <Layout
          toc={{ backToTop: "Torna all'inizio", title: "In questa pagina" }}
          lastUpdated={<LastUpdated locale="it">Aggiornato il</LastUpdated>}
          themeSwitch={{ dark: "Tema scuro", light: "Tema chiaro", system: "Tema di sistema" }}
          editLink={null}
          feedback={{ content: null }}
          pageMap={pageMap}
          navbar={navbar}
          // ... Your additional layout options
        >
          {children}
        </Layout>
        <Analytics />
      </body>
    </html>
  );
}
