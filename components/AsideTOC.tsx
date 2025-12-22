import { AsideSubtitle } from "@/components/AsideSubtitle";
<<<<<<< HEAD
import type { Heading } from "@/types/Heading";

interface Props {
  headings: Heading[];
}

function AsideTOC({ headings }: Props) {
=======

function AsideTOC({ headings }) {
  console.log(headings);
>>>>>>> 17cdd6d308d1ca3a84e6ac8eb5309c58a3a76f1d
  return (
    <aside className="text-sm flex flex-col gap-2">
      <AsideSubtitle>Tabella dei Contenuti</AsideSubtitle>
      {headings.map((h) => (
<<<<<<< HEAD
        <a
          className="py-1 px-2 duration-150 hover:bg-accent rounded-md hover:text-white"
          key={h.id}
          href={`#${h.id}`}
        >
=======
        <a className="py-1 px-2 duration-150 hover:bg-accent rounded-md hover:text-white" key={h.id} href={`#${h.id}`}>
>>>>>>> 17cdd6d308d1ca3a84e6ac8eb5309c58a3a76f1d
          {h.text}
        </a>
      ))}
    </aside>
  );
}

export { AsideTOC };
