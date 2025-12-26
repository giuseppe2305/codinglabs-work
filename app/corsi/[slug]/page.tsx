import { ContentSource } from "@/components/documentation/ContentSource";
import { ProfileCard } from "@/components/documentation/ProfileCard";
import { IconLabel } from "@/components/IconLabel";
import { Section } from "@/components/Section/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getCourseContent } from "@/lib/getCourseContent";
import {
  Book,
  Check,
  CircleAlert,
  Clock,
  Library,
  ShoppingCart,
} from "lucide-react";
import Image from "next/image";

export default function page() {
  return (
    <>
      <Section className="grid grid-cols-2 gap-x-16">
        <div className="flex flex-col gap-1">
          <Section.Title>Corso TailwindCSS v4</Section.Title>
          <ProfileCard className="mt-2 text-accent-foreground" />
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
        <div className="relative aspect-2/1 row-span-3 rounded-md overflow-hidden shadow-2xl border-2 hover:shadow-black/50 hover:scale-101 duration-150">
          <Image src="/courses/tailwindcss.png" alt="Course Image" fill />
        </div>
      </Section>
      <Section className="grid grid-cols-[1fr_300px] gap-x-12">
        <Section.H3 className="col-span-full">Descrizione del Corso</Section.H3>
        <ContentSource source={getCourseContent("tailwindcss")} />
        <Card className="p-5 gap-0">
          <CardHeader className="p-0">
            <CardTitle>Requisiti per il corso</CardTitle>
          </CardHeader>
          <CardContent className="mt-4 p-0 flex flex-col gap-3">
            <h4 className="text-foreground">Obbligatori</h4>
            <IconLabel icon={Check}>HTML5</IconLabel>
            <IconLabel icon={Check}>CSS3</IconLabel>

            <h4 className="text-foreground">Consigliati</h4>
            <IconLabel
              color="text-yellow-400 bg-yellow-400/5"
              icon={CircleAlert}
            >
              Javascript
            </IconLabel>
            <IconLabel
              color="text-yellow-400 bg-yellow-400/5"
              icon={CircleAlert}
            >
              Node.js
            </IconLabel>
          </CardContent>
        </Card>
      </Section>
    </>
  );
}
