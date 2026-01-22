import "@/app/globals.css";
import "nextra-theme-docs/style.css";
export { metadata } from "@/lib/metadata";

import { getPageMap } from "nextra/page-map";
import { Layout } from "@/components/nextra/Layout";

import type { ChildrenNode } from "@/types/ChildrenNode";
const pageMap = await getPageMap("/documentazione/typescript");

export default async function DocsLayout({ children }: ChildrenNode) {
  return <Layout pageMap={pageMap}>{children}</Layout>;
}
