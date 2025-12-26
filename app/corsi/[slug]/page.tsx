import { ProfileCard } from "@/components/documentation/ProfileCard";
import { IconLabel } from "@/components/IconLabel";
import { Section } from "@/components/Section/Section";
import { Button } from "@/components/ui/button";
import { Book, Clock, Library, ShoppingCart } from "lucide-react";
import Image from "next/image";

export default function page() {
  return (
    <>
      <Section className="grid grid-cols-2 gap-16">
        <div className="flex flex-col gap-1">
          <Section.Title>Corso TailwindCSS v4</Section.Title>
          <ProfileCard className="mt-2 pb-0! text-accent-foreground" />
          <Section.Subtitle>
            Questo corso di Tailwind CSS è basato sull&apos;uso moderno e
            corretto di TailwindCSS alla versione 4, la sua piú recente,
            seguendo le best practice attuali. Imparerai a costruire interfacce
            rapide, coerenti e manutenibili senza CSS inutili o soluzioni
            improvvisate.
          </Section.Subtitle>

          <div className="flex items-center mt-6 justify-between">
            <div className="flex items-center gap-8">
              <IconLabel icon={Clock}>4 ore</IconLabel>
              <IconLabel icon={Library}>9 capitoli</IconLabel>
              <IconLabel icon={Book}>28 lezioni</IconLabel>
            </div>

            <span className="text-4xl font-bold text-accent-foreground">
              €9.99
            </span>
          </div>
          <Button size="lg" className="mt-8">
            <ShoppingCart />
            Acquista Ora
          </Button>
        </div>
        <div className="relative aspect-2/1 row-span-3 rounded-md overflow-hidden">
          <Image src="/courses/tailwindcss.png" alt="Course Image" fill />
        </div>
      </Section>
    </>
  );
}
