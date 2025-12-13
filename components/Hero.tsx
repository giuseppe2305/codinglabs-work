import { Highlight } from "@/components/Highlight";
import { ShadowBlob } from "@/components/ShadowBlob";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

function Hero() {
  return (
    <main className="flex items-center justify-center h-[90vh] flex-col gap-7 relative overflow-hidden">
      <ShadowBlob />
      <h1 className="text-center text-accent-foreground text-7xl font-bold">
        Costruisci la Tua
        <br />
        Carriera nel <Highlight>Coding</Highlight>
      </h1>
      <p className="w-150 text-center text-lg">
        Dalla teoria alla pratica: costruisci progetti reali, scrivi codice funzionante e sviluppa le competenze
        richieste dal mercato.
      </p>
      <div className="flex items-center gap-4">
        <Button size="lg">
          Inizia ora
          <ChevronRight />
        </Button>
        <Button size="lg" variant="secondary">
          Risorse utili
        </Button>
      </div>
    </main>
  );
}

export { Hero };
