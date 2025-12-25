import type { ChildrenString } from "@/types/ChildrenString";

function Subtitle({ children }: ChildrenString) {
  return (
    <p className="md:text-lg max-md:max-w-120 mx-auto mt-2 font-light">
      {children}
    </p>
  );
}

export { Subtitle };
