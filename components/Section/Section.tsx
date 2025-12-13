import { Title } from "./Title";
import { Subtitle } from "./Subtitle";

import type { ChildrenNode } from "@/types/ChildrenNode";

function Section({ children }: ChildrenNode) {
  return <section className="w-[90%] mx-auto py-15">{children}</section>;
}

Section.Title = Title;
Section.Subtitle = Subtitle;

export { Section };
