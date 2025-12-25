import type { ChildrenString } from "@/types/ChildrenString";

function Title({ children }: ChildrenString) {
  return (
    <h2 className="text-3xl md:text-4xl text-accent-foreground font-semibold">
      {children}
    </h2>
  );
}

export { Title };
