import { Section } from "@/components/Section/Section";
import Content from "./content.mdx";
import { AsideNavigation } from "@/components/AsideNavigation";

export default function Page() {
  return (
    <Section className="grid grid-cols-[250px_auto_220px] gap-10 mt-20">
      <AsideNavigation />
      <article>
        <Content />
      </article>
      <aside>Indice</aside>
    </Section>
  );
}
