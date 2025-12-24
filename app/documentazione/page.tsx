import { DocsCardSection } from "@/components/DocsCardSection";
import { Section } from "@/components/Section/Section";
import { Button } from "@/components/ui/button";
import { frameworks, languages } from "@/data/docsStackCard";

export default function page() {
  return (
    <>
      <Section className="border-b">
        <div className="h-100 md:mt-30 w-full md:w-2/3 lg:w-1/2 flex flex-col max-md:text-center justify-center">
          <Section.Title>Documentazione</Section.Title>
          <Section.Subtitle>
            Esplora la nostra raccolta completa di guide, tutorial e
            documentazione tecnica. Dalle basi alla padronanza avanzata, con
            esempi pratici e approfondimenti dettagliati.
          </Section.Subtitle>
          <Button className="self-center max-md:mt-12 md:self-start mt-6">
            Suggerisci Modifiche
          </Button>
        </div>
      </Section>
      <DocsCardSection label="Linguaggi" list={languages} />
      <DocsCardSection label="Frameworks" list={frameworks} />
    </>
  );
}
