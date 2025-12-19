import { Section } from "@/components/Section/Section";
import Content from "./content.mdx";

export default function Page() {
  return (
    <Section className="grid grid-cols-[220px_auto_220px] mt-20">
      <aside>BASE JAVASCRIPT</aside>
      <article>
        <Content />
      </article>
      <aside>Indice</aside>
    </Section>
  );
}
