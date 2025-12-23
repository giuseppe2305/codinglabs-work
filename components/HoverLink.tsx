import Link from "next/link";

import type { ChildrenNode } from "@/types/ChildrenNode";
import type { ClassName } from "@/types/ClassName";

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

type Props = ChildrenNode &
  ClassName & {
    href: string;
  };

function HoverLink({ children, className = "", href }: Props) {
  return (
    <Link href={href} className={`${navigationMenuTriggerStyle()} ${className}`}>
      {children}
    </Link>
  );
}

export { HoverLink };
