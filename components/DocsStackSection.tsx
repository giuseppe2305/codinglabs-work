import type { DocsTechnology } from "@/types/DocsTechnology";

import { Section } from "./Section/Section";
import { DocsStackCard } from "./DocsStackCard";

interface Props {
  list: DocsTechnology[];
  label: string;
}

function DocsStackSection({ list, label }: Props) {
  return (
    <Section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-20 max-md:justify-items-center">
      <Section.H3 className="md:col-span-2 lg:col-span-3">{label}</Section.H3>
      {list.map((lan) => (
        <DocsStackCard
          key={lan.id}
          title={lan.title}
          description={lan.description}
          disabled={lan.disabled}
        />
      ))}
    </Section>
  );
}

export { DocsStackSection };
