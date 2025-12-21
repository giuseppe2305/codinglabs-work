import type { ChildrenNode } from "@/types/ChildrenNode";

import { AsideIndex } from "@/components/AsideIndex";
import { AsideNavigation } from "@/components/AsideNavigation";
import { Section } from "@/components/Section/Section";

interface Props extends ChildrenNode {
  params: Promise<{ topic: string }>;
}

export default async function layout({ children, params }: Props) {
  const { topic } = await params;

  return (
    <Section className="grid grid-cols-[200px_1fr_200px] gap-6 mt-20">
      <AsideNavigation topic={topic} />
      {children}
      <AsideIndex />
    </Section>
  );
}
