import type { ChildrenNode } from "@/types/ChildrenNode";

import { AsideNavigation } from "@/components/documentation/AsideNavigation";
import { Section } from "@/components/Section/Section";

interface Props extends ChildrenNode {
  params: Promise<{ topic: string }>;
}

export default async function layout({ children, params }: Props) {
  const { topic } = await params;

  return (
    <Section className="grid md:grid-rows-[auto_1fr] md:grid-cols-[200px_1fr] xl:grid-cols-[200px_1fr_200px] 2xl:grid-cols-[300px_1fr_300px] gap-20 border-none max-w-full">
      <AsideNavigation topic={topic} />
      {children}
    </Section>
  );
}
