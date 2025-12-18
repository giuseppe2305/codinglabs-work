import { Title } from "./Title";
import { Subtitle } from "./Subtitle";

import type { ChildrenNode } from "@/types/ChildrenNode";
import type { ClassName } from "@/types/ClassName";

type Props = ChildrenNode & ClassName;

function Section({ children, className }: Props) {
  return <section className={`w-[90%] mx-auto py-15 ${className}`}>{children}</section>;
}

Section.Title = Title;
Section.Subtitle = Subtitle;

export { Section };
