import { Layout } from "nextra-theme-docs";
import { getPageMap } from "nextra/page-map";

import "nextra-theme-docs/style.css";
import type { ChildrenNode } from "@/types/ChildrenNode";

export default async function DocsLayout({ children }: ChildrenNode) {
  return (
    <Layout
      pageMap={await getPageMap()}
      docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
      // ... Your additional layout options
    >
      {children}
    </Layout>
  );
}
