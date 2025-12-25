import { ChildrenString } from "@/types/ChildrenString";

function AsideSubtitle({ children }: ChildrenString) {
  return (
    <h4 className="px-3 font-semibold mb-3 border-b uppercase py-1">
      {children}
    </h4>
  );
}

export { AsideSubtitle };
