import { CourseCard } from "@/components/CourseCard";
import { Highlight } from "@/components/Highlight";
import { Section } from "@/components/Section/Section";

export default function page() {
  return (
    <>
      <Section className="text-center">
        <h1 className="text-5xl/15 text-accent-foreground font-bold mt-10">
          Investi su te stesso.
          <br />
          Acquisisci <Highlight>competenze di qualitá</Highlight>
        </h1>
        <Section.Subtitle className="py-6">
          Investi su te stesso oggi e acquisisci competenze di qualità con i
          nostri corsi: scopri percorsi diversi che ti guideranno passo passo
          verso risultati concreti e duraturi.
        </Section.Subtitle>
      </Section>
      <Section className="grid grid-cols-[repeat(auto-fit,minmax(340px,1fr))] gap-6">
        <Section.Title className="col-span-full">I nostri corsi</Section.Title>
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </Section>
    </>
  );
}
