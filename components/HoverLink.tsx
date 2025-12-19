import Link from "next/link";
import type { ChildrenNode } from "@/types/ChildrenNode";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

interface Props extends ChildrenNode {
  href: string;
}

function HoverLink({ children, href }: Props) {
  return (
    <Link href={href} className={navigationMenuTriggerStyle()}>
      {children}
    </Link>
  );
}

export { HoverLink };
