import { Highlight } from "@/components/Highlight";
import { Section } from "@/components/Section/Section";

export default function page() {
  return (
    <>
      <Section>
        <h1 className="text-5xl/16 text-accent-foreground font-bold mt-10">
          Investi su te stesso.
          <br />
          Acquisisci <Highlight>competenze di qualitá</Highlight>
        </h1>
      </Section>
      <Section>
        <Section.Title>I nostri corsi</Section.Title>
      </Section>
    </>
  );
}
