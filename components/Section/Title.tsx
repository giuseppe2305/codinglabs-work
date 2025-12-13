import type { ChildrenString } from "@/types/ChildrenString";

function Title({ children }: ChildrenString) {
  return <h2 className="text-center text-3xl text-accent-foreground font-semibold">{children}</h2>;
}

export { Title };
