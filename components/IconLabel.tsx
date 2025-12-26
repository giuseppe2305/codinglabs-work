import type { ChildrenString } from "@/types/ChildrenString";
import type { LucideIcon } from "lucide-react";
import type { ClassName } from "@/types/ClassName";

import { ColorIcon } from "./ColorIcon";

type Props = ChildrenString &
  ClassName & {
    icon: LucideIcon;
    color?: React.ComponentProps<"div">["className"];
  };

function IconLabel({ icon, children, className, color }: Props) {
  return (
    <span className={`flex items-center gap-2 ${className}`}>
      <ColorIcon icon={icon} color={color} />
      {children}
    </span>
  );
}

export { IconLabel };
