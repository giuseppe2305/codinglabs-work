import { AsideSubtitle } from "@/components/AsideSubtitle";
import { TOCItem } from "@/lib/generateTOC";
import { AsideList } from "./AsideList";
import Link from "next/link";

interface Props {
  headings: TOCItem[];
}

function AsideTOC({ headings }: Props) {
  return (
    <aside className="text-sm">
      <AsideSubtitle>Tabella dei Contenuti</AsideSubtitle>
      <AsideList>
        {headings.map((h) => (
          <Link
            className="p-2 hover:bg-accent rounded-md hover:text-accent-foreground duration-150"
            href={h.url}
            key={h.url}
          >
            {h.title}
          </Link>
        ))}
      </AsideList>
    </aside>
  );
}

export { AsideTOC };
