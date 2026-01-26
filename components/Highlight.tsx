import type { ChildrenNode } from "@/types/ChildrenNode";

function Highlight({ children }: ChildrenNode) {
  return <span className="bg-clip-text text-transparent bg-linear-to-r from-teal-500 to-primary">{children}</span>;
}

export { Highlight };
