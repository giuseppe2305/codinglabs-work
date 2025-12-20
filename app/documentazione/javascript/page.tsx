import { Section } from "@/components/Section/Section";
import Content from "./content.mdx";
import { AsideNavigation } from "@/components/AsideNavigation";
import { AsideIndex } from "@/components/AsideIndex";

const navigation = [
  {
    subtitle: "Introduzione a Javascript",
    content: ["Introduzione", "Storia", "Versioni"],
  },

  {
    subtitle: "Sintassi",
    content: ["Sintassi di base", "Commenti", "Variabili"],
  },
];

export default function Page() {
  return (
    <Section className="grid grid-cols-[280px_auto_220px] gap-8 mt-20">
      <AsideNavigation navigation={navigation} />
      <article>
        <Content />
      </article>
      <AsideIndex />
    </Section>
  );
}
