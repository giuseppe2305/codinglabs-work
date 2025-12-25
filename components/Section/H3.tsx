import { ChildrenString } from "@/types/ChildrenString";

function H3({ children }: ChildrenString) {
  return (
    <h3 className="text-xl font-medium text-accent-foreground md:col-span-2 lg:col-span-3">
      {children}
    </h3>
  );
}

export { H3 };
