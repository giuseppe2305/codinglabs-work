import { AsideSubtitle } from "@/components/AsideSubtitle";
import type { Heading } from "@/types/Heading";

interface Props {
  headings: Heading[];
}

function AsideTOC({ headings }: Props) {
  return (
    <aside className="text-sm flex flex-col gap-2">
      <AsideSubtitle>Tabella dei Contenuti</AsideSubtitle>
      {headings.map((h) => (
        <a
          className="py-1 px-2 duration-150 hover:bg-accent rounded-md hover:text-white"
          key={h.id}
          href={`#${h.id}`}
        >
          {h.text}
        </a>
      ))}
    </aside>
  );
}

export { AsideTOC };
