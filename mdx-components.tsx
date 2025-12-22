import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="text-accent-foreground text-3xl font-bold pb-3">
      {children}
    </h1>
  ),

  h2: ({ children }) => (
    <h2 className="text-accent-foreground text-xl font-bold pt-8 pb-3">
      {children}
    </h2>
  ),

  h3: ({ children }) => (
    <h2 className="text-accent-foreground text-xl font-bold pt-4 pb-3">
      {children}
    </h2>
  ),

  ul: ({ children }) => <ul className="my-2">{children}</ul>,
  li: ({ children }) => <li className="list-disc list-inside">{children}</li>,

  p: ({ children }) => <p>{children}</p>,
  pre: ({ children }) => (
    <pre className="bg-muted px-4 py-2 my-2 rounded-md">{children}</pre>
  ),
  hr: () => <hr className="mt-4" />,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
