import type { ChildrenString } from "@/types/ChildrenString";
import type { ClassName } from "@/types/ClassName";

type Props = ChildrenString & ClassName;

function Subtitle({ children, className }: Props) {
  return (
    <p
      className={`md:text-lg max-md:max-w-120 max-w-180 max-md:mx-auto mt-2 font-light ${className}`}
    >
      {children}
    </p>
  );
}

export { Subtitle };
