import { Layout, Navbar } from "nextra-theme-docs";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import { ChildrenNode } from "@/types/ChildrenNode";

export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
};

const navbar = (
  <Navbar
    logo={<b>Documentazioni</b>}
    // ... Your additional navbar options
  />
);

export default async function DocsLayout({ children }: ChildrenNode) {
  return (
    <Layout
      navbar={navbar}
      pageMap={await getPageMap()}
      docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
      // ... Your additional layout options
    >
      {children}
    </Layout>
  );
}
