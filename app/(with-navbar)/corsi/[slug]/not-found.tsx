import { Section } from "@/components/Section/Section";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function notFound() {
  return (
    <Section className="flex flex-col items-center border-none">
      <Section.Title className="text-center">
        Corso non disponibile
      </Section.Title>
      <Section.Subtitle className="text-center mt-4">
        Questo corso non é attualmente disponibile, ci stiamo ancora lavorando
        per garantire il massimo della qualitá, ti invitiamo a riprovare
        prossimamente. Se hai particolari richieste e/o suggerimenti puoi
        scriverci a crstelli@gmail.com
      </Section.Subtitle>
      <Button className="mt-8" size="lg" asChild>
        <Link href="/corsi">
          <ArrowLeft />
          Torna ai corsi
        </Link>
      </Button>
    </Section>
  );
}
