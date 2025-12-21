import type { ChildrenNode } from "@/types/ChildrenNode";

import { AsideIndex } from "@/components/AsideIndex";
import { AsideNavigation } from "@/components/AsideNavigation";
import { Section } from "@/components/Section/Section";

export default function layout({ children }: ChildrenNode) {
  return (
    <Section className="grid grid-cols-[200px_1fr_200px] mt-20">
      <AsideNavigation navigation={[]} />
      {children}
      <AsideIndex />
    </Section>
  );
}
