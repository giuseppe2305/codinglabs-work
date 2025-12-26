import type { ChildrenString } from "@/types/ChildrenString";
import type { LucideIcon } from "lucide-react";
import { ColorIcon } from "./ColorIcon";

interface Props extends ChildrenString {
  icon: LucideIcon;
}

function IconLabel({ icon, children }: Props) {
  return (
    <span className="flex items-center gap-2">
      <ColorIcon icon={icon} />
      {children}
    </span>
  );
}

export { IconLabel };
