import { Highlight } from "@/components/Highlight";
import { ShadowBlob } from "@/components/ShadowBlob";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

function Hero() {
  return (
    <main className="flex items-center justify-center h-[90vh] flex-col gap-7 relative overflow-hidden">
      <ShadowBlob />
      <h1 className="text-center text-accent-foreground text-3xl md:text-5xl lg:text-7xl font-bold">
        Costruisci la Tua
        <br />
        Carriera nel <Highlight>Coding</Highlight>
      </h1>
      <p className="max-w-150 w-[90%] text-center md:text-lg">
        Dalla teoria alla pratica: costruisci progetti reali, scrivi codice funzionante e sviluppa le competenze
        richieste dal mercato.
      </p>
      <div className="flex max-md:flex-col items-center gap-4">
        <Button size="lg" asChild>
          <Link href="documentazione">
            Inizia ora
            <ChevronRight />
          </Link>
        </Button>
        <Button size="lg" variant="secondary" asChild>
          <Link href="documentazione">Risorse utili</Link>
        </Button>
      </div>
    </main>
  );
}

export { Hero };
