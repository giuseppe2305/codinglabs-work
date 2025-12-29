import type { ChildrenNode } from "@/types/ChildrenNode";

import { AsideNavigation } from "@/components/documentation/AsideNavigation";
import { Section } from "@/components/Section/Section";

interface Props extends ChildrenNode {
  params: Promise<{ topic: string }>;
}

export default async function layout({ children, params }: Props) {
  const { topic } = await params;

  return (
    <Section className="grid md:grid-rows-[auto_1fr] md:grid-cols-[200px_1fr] lg:grid-cols-[200px_1fr_200px] gap-8 mt-10 border-none">
      <AsideNavigation topic={topic} />
      {children}
    </Section>
  );
}
