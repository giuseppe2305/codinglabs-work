import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h1: ({ children }) => <h1 className="text-accent-foreground text-3xl font-bold pb-3">{children}</h1>,
  h2: ({ children }) => <h2 className="text-accent-foreground text-xl font-bold pt-8 pb-3">{children}</h2>,

  p: ({ children }) => <p>{children}</p>,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
