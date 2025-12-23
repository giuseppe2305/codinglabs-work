import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMdx from "remark-mdx";
import { visit } from "unist-util-visit";
import type { Heading as MdastHeading, Text } from "mdast";

export interface TOCItem {
  title: string;
  url: string;
  depth: number;
}

export function generateTOC(mdxContent: string): TOCItem[] {
  const tree = unified().use(remarkParse).use(remarkMdx).parse(mdxContent);

  const toc: TOCItem[] = [];

  visit(tree, "heading", (node: MdastHeading) => {
    // Extract text content from the heading's children
    const title = node.children
      .filter((child): child is Text => child.type === "text")
      .map((child) => child.value)
      .join("");

    // Create a URL-friendly slug
    const url = `#${title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "")}`;

    // We usually only want H2 and H3 for a TOC
    if (node.depth > 1 && node.depth < 4) {
      toc.push({
        title,
        url,
        depth: node.depth,
      });
    }
  });

  return toc;
}
