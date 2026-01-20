import { Layout } from "nextra-theme-docs";
import { getPageMap } from "nextra/page-map";

import "nextra-theme-docs/style.css";
import type { ChildrenNode } from "@/types/ChildrenNode";

export default async function DocsLayout({ children }: ChildrenNode) {
  const pageMap = await getPageMap("/documentazione/javascript");

  return (
    <Layout
      pageMap={pageMap}
      // ... Your additional layout options
    >
      {children}
    </Layout>
  );
}
