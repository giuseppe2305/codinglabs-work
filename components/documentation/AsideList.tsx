import { ChildrenNode } from "@/types/ChildrenNode";
function AsideList({ children }: ChildrenNode) {
  return <ul className="flex flex-col gap-1">{children}</ul>;
}

export { AsideList };
