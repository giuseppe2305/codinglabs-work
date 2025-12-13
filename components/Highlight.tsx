import type { ChildrenNode } from "@/types/ChildrenNode";

function Highlight({ children }: ChildrenNode) {
  return <span className="text-primary">{children}</span>;
}

export { Highlight };
