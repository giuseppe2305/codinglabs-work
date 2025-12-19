import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h1: ({ children }) => <h1 className="text-accent-foreground text-3xl font-bold pb-3">{children}</h1>,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
