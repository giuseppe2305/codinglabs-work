import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMdx from "remark-mdx";
import remarkSlug from "remark-slug";

interface Heading {
  text: string;
  id: string;
  depth: number;
}

export function generateTOC(mdxContent: string) {
  const tree = unified().use(remarkParse).use(remarkMdx).use(remarkSlug).parse(mdxContent);

  const headings: Heading[] = [];

  function visit(node) {
    if (node.type === "heading" && (node.depth === 2 || node.depth === 3)) {
      const text = node.children
        .filter((child) => child.type === "text")
        .map((child) => child.value)
        .join("");
      headings.push({ text, id: node.data?.id || text.toLowerCase().replace(/\s+/g, "-"), depth: node.depth });
    }
    if (node.children) {
      node.children.forEach(visit);
    }
  }

  visit(tree);

  return headings;
}
