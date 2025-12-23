import { AsideSubtitle } from "@/components/AsideSubtitle";
import { TOCItem } from "@/lib/generateTOC";

interface Props {
  headings: TOCItem[];
}

function AsideTOC({ headings }: Props) {
  return (
    <aside className="text-sm flex flex-col gap-2">
      <AsideSubtitle>Tabella dei Contenuti</AsideSubtitle>
      {headings.map((h) => (
        <a
          className="py-1 px-2 duration-150 hover:bg-accent rounded-md hover:text-white"
          key={h.url}
          href={h.url}
        >
          {h.title}
        </a>
      ))}
    </aside>
  );
}

export { AsideTOC };
