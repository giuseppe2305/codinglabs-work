import { Section } from "@/components/Section/Section";
import Content from "./content.mdx";

export default function Page() {
  return (
    <Section className="grid grid-cols-[250px_auto_220px] gap-10 mt-20">
      <aside>
        <div className="flex flex-col text-sm gap-4">
          <span className="px-3 font-medium uppercase border-b py-1 not-first:mt-4">Introduzione a Javascript</span>
          <div>Introduzione</div>
          <div>Versioni</div>
          <div>Storia</div>
          <div>Sintassi</div>

          <span className="px-3 font-medium uppercase border-b py-1 not-first:mt-4">Introduzione a Javascript</span>
          <div>Introduzione</div>
          <div>Versioni</div>
          <div>Storia</div>
          <div>Sintassi</div>
        </div>
      </aside>
      <article>
        <Content />
      </article>
      <aside>Indice</aside>
    </Section>
  );
}
