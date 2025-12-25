import { DocsStackSection } from "@/components/DocsStackSection";
import { Section } from "@/components/Section/Section";
import { Button } from "@/components/ui/button";
import { frameworks, languages, metaFrameworks } from "@/data/docsStackCard";
import { AlertCircle, Edit } from "lucide-react";

export default function page() {
  return (
    <>
      <Section>
        <div className="w-full md:w-2/3 lg:w-1/2 flex flex-col max-md:text-center md:py-15">
          <Section.Title>Documentazione</Section.Title>
          <Section.Subtitle>
            Esplora la nostra raccolta completa di guide, tutorial e
            documentazione tecnica. Dalle basi alla padronanza avanzata, con
            esempi pratici e approfondimenti dettagliati.
          </Section.Subtitle>
          <div className="flex max-md:mt-10 max-md:flex-col items-center gap-2 mt-6">
            <Button>
              <Edit />
              Suggerisci Modifiche
            </Button>
            <Button variant="outline">
              <AlertCircle />
              Segnala un problema
            </Button>
          </div>
        </div>
      </Section>
      <DocsStackSection label="Linguaggi" list={languages} />
      <DocsStackSection label="Frameworks" list={frameworks} />
      <DocsStackSection label="Meta Frameworks" list={metaFrameworks} />
    </>
  );
}
