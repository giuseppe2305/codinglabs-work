import type { ChildrenString } from "@/types/ChildrenString";

function Subtitle({ children }: ChildrenString) {
  return <p className="text-center text-lg mt-2 font-light">{children}</p>;
}

export { Subtitle };
