import { LanguageCard } from "@/components/LanguageCard";
import { Section } from "@/components/Section/Section";
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <>
      <Section className="border-b">
        <div className="h-100 mt-30 w-1/2 flex flex-col justify-center">
          <Section.Title>Documentazioni</Section.Title>
          <Section.Subtitle>
            Esplora la nostra raccolta completa di guide, tutorial e documentazione tecnica. Dalle basi alla padronanza
            avanzata, con esempi pratici e approfondimenti dettagliati.
          </Section.Subtitle>
          <Button className="self-start mt-10">Suggerisci Modifiche</Button>
        </div>
      </Section>
      <Section className="grid grid-cols-3 gap-10 mt-4">
        <LanguageCard
          title="Javascript"
          description="Il linguaggio di programmazione per eccellenza nello sviluppo web, sia per il frontend che per il backend."
        />
      </Section>
    </>
  );
}
