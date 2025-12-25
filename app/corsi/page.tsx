import { Highlight } from "@/components/Highlight";
import { Section } from "@/components/Section/Section";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

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
        <div className="grid grid-cols-3 mt-10">
          <Card>
            <CardHeader>
              <CardTitle>CSS Moderno</CardTitle>
            </CardHeader>
          </Card>
        </div>
      </Section>
    </>
  );
}
