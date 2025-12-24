import { LanguageCard } from "@/components/LanguageCard";
import { Section } from "@/components/Section/Section";
import { Button } from "@/components/ui/button";
import { languages } from "@/data/docsStackCard";

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
      <Section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-4 max-md:justify-items-center">
        <h2 className="text-xl font-medium text-accent-foreground md:col-span-2 lg:col-span-3">
          Linguaggi
        </h2>
        {languages.map((lan) => (
          <LanguageCard
            key={lan.id}
            title={lan.title}
            description={lan.description}
            disabled={lan.disabled}
          />
        ))}
      </Section>
    </>
  );
}
