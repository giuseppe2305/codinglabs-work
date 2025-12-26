import type { ChildrenString } from "@/types/ChildrenString";
import type { LucideIcon } from "lucide-react";

import { ColorIcon } from "./ColorIcon";

interface Props extends ChildrenString {
  icon: LucideIcon;
  color?: React.ComponentProps<"div">["className"];
}

function IconLabel({ icon, children, color }: Props) {
  return (
    <span className="flex items-center gap-2">
      <ColorIcon icon={icon} color={color} />
      {children}
    </span>
  );
}

export { IconLabel };
