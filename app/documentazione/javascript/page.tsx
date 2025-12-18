import { Section } from "@/components/Section/Section";
import Content from "./content.mdx";

export default function Page() {
  return (
    <Section className="grid grid-cols-[220px_auto_220px] mt-20">
      <div>BASE JAVASCRIPT</div>
      <article>
        <Content />
      </article>
      <div>Indice</div>
    </Section>
  );
}
