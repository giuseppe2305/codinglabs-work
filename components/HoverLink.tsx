import Link from "next/link";
import type { ChildrenNode } from "@/types/ChildrenNode";

interface Props extends ChildrenNode {
  href: string;
}

function HoverLink({ children, href }: Props) {
  return (
    <Link href={href} className="hover:text-popover-foreground duration-150">
      {children}
    </Link>
  );
}

export { HoverLink };
