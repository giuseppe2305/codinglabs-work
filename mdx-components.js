import { useMDXComponents as getThemeComponents } from "nextra-theme-docs"; // nextra-theme-blog or your custom theme
import { ProfileCard } from "./components/ProfileCard";

// Get the default MDX components
const themeComponents = getThemeComponents();

// Merge components
export function useMDXComponents(components) {
  return {
    ...themeComponents,
    ...components,
  };
}

export function useMDXRemoteComponents() {
  return {
    h1: ({ children }) => (
      <>
        <h1 id={children.toLowerCase().replaceAll(" ", "-")} className="text-accent-foreground text-3xl font-bold pb-2">
          {children}
        </h1>
        <ProfileCard />
      </>
    ),

    h2: ({ children }) => (
      <h2 id={children.toLowerCase().replaceAll(" ", "-")} className="text-accent-foreground text-xl font-bold pt-8">
        {children}
      </h2>
    ),

    h3: ({ children }) => (
      <h3 id={children.toLowerCase().replaceAll(" ", "-")} className="text-accent-foreground text-xl font-bold pt-4">
        {children}
      </h3>
    ),

    ul: ({ children }) => <ul className="my-2">{children}</ul>,
    li: ({ children }) => <li className="list-disc list-inside">{children}</li>,

    p: ({ children }) => <p className="my-4">{children}</p>,
    pre: ({ children }) => <pre className="bg-muted px-4 py-2 my-2 rounded-md">{children}</pre>,
    hr: () => <hr className="mt-4" />,
  };
}
