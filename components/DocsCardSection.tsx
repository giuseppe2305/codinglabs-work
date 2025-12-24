import type { DocsTechnology } from "@/types/DocsTechnology";

import { Section } from "./Section/Section";
import { DocsStackCard } from "./DocsStackCard";

interface Props {
  list: DocsTechnology[];
  label: string;
}

function DocsCardSection({ list, label }: Props) {
  return (
    <Section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-4 max-md:justify-items-center">
      <h2 className="text-xl font-medium text-accent-foreground md:col-span-2 lg:col-span-3">
        {label}
      </h2>
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

export { DocsCardSection };
