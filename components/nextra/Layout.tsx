import { Analytics } from "@vercel/analytics/next";
import { ChildrenNode } from "@/types/ChildrenNode";
import { BackgroundBlobs } from "../BackgroundBlobs";

import { Inter } from "next/font/google";
import { LastUpdated, Navbar, Layout as NextraLayout } from "nextra-theme-docs";
import type { PageMapItem } from "nextra";
import { Banner } from "nextra/components";

const inter = Inter({ subsets: ["latin"] });

const navbar = (
  <Navbar
    className="md:px-20! lg:px-40!"
    logo={
      <p className="text-accent-foreground font-bold">
        CodingLabs - Documentazioni
      </p>
    }
  />
);

const banner = (
  <Banner>
    Le documentazioni sono in costruzione, puoi utilizzare la navigazione sulla
    sinistra come roadmap per monitorare i tuoi progressi. Grazie!
  </Banner>
);

interface Props extends ChildrenNode {
  pageMap: PageMapItem[];
}

function Layout({ children, pageMap }: Props) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-background relative text-foreground dark flex flex-col max-w-screen`}
      >
        <BackgroundBlobs />
        <NextraLayout
          toc={{ backToTop: "Torna all'inizio", title: "In questa pagina" }}
          lastUpdated={<LastUpdated locale="it">Aggiornato il</LastUpdated>}
          editLink={null}
          feedback={{ content: null }}
          pageMap={pageMap}
          navbar={navbar}
          banner={banner}
          darkMode={false}
          nextThemes={{ defaultTheme: "dark" }}
        >
          {children}
        </NextraLayout>
        <Analytics />
      </body>
    </html>
  );
}

export { Layout };
