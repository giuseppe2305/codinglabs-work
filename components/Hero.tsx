import { Highlight } from "@/components/Highlight";
import { ShadowBlob } from "@/components/ShadowBlob";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

function Hero() {
  return (
    <main className="flex items-center -translate-y-10 justify-center grow flex-col gap-7 relative overflow-hidden p-4">
      <ShadowBlob />
      <h1 className="text-center text-accent-foreground text-4xl sm:text-5xl lg:text-7xl font-extrabold">
        Costruisci la Tua
        <br />
        Carriera nel <Highlight>Coding</Highlight>
      </h1>
      <p className="max-w-150 w-full text-center sm:text-lg">
        Dalla teoria alla pratica: costruisci progetti reali, scrivi codice
        funzionante e sviluppa le competenze richieste dal mercato.
      </p>
      <div className="flex max-md:flex-col max-md:mt-10 items-center gap-4">
        <Button size="lg" asChild className="group">
          <Link href="corsi">
            Inizia ora
            <ChevronRight className="group-hover:translate-x-2 duration-150" />
          </Link>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <Link href="documentazione">Risorse utili</Link>
        </Button>
      </div>
    </main>
  );
}

export { Hero };
