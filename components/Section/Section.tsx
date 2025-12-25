import { Title } from "./Title";
import { Subtitle } from "./Subtitle";

import type { ChildrenNode } from "@/types/ChildrenNode";
import type { ClassName } from "@/types/ClassName";
import { H3 } from "./H3";

type Props = ChildrenNode & ClassName;

function Section({ children, className }: Props) {
  return (
    <section
      className={`w-[95%] max-w-300 mx-auto py-15 border-b ${className}`}
    >
      {children}
    </section>
  );
}

Section.Title = Title;
Section.Subtitle = Subtitle;

Section.H3 = H3;

export { Section };
