import type { ChildrenString } from "@/types/ChildrenString";
import type { ClassName } from "@/types/ClassName";

type Props = ChildrenString & ClassName;

function Title({ children, className }: Props) {
  return (
    <h2
      className={`text-3xl md:text-4xl text-accent-foreground font-semibold ${className}`}
    >
      {children}
    </h2>
  );
}

export { Title };
