import { AsideSubtitle } from "@/components/AsideSubtitle";

function AsideTOC({ headings }) {
  console.log(headings);
  return (
    <aside className="text-sm flex flex-col gap-2">
      <AsideSubtitle>Tabella dei Contenuti</AsideSubtitle>
      {headings.map((h) => (
        <a className="py-1 px-2 duration-150 hover:bg-accent rounded-md hover:text-white" key={h.id} href={`#${h.id}`}>
          {h.text}
        </a>
      ))}
    </aside>
  );
}

export { AsideTOC };
