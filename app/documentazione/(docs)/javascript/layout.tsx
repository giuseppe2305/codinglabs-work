import { Layout, Navbar } from "nextra-theme-docs";
import { getPageMap } from "nextra/page-map";

import "@/app/globals.css";
import "nextra-theme-docs/style.css";
import type { ChildrenNode } from "@/types/ChildrenNode";

const navbar = <Navbar logo={<p className="text-accent-foreground">CodingLabs - Documentazioni</p>} />;

export default async function DocsLayout({ children }: ChildrenNode) {
  const pageMap = await getPageMap("/documentazione/javascript");

  return (
    <Layout
      editLink={null}
      feedback={{ content: null }}
      pageMap={pageMap}
      navbar={navbar}
      // ... Your additional layout options
    >
      {children}
    </Layout>
  );
}
