import Link from "next/link";
import { Alert, AlertTitle } from "./ui/alert";
import { Smile } from "lucide-react";

function PageAlert() {
  return (
    <Alert className="bg-primary text-primary-foreground rounded-none flex items-center justify-center">
      <Smile className="translate-y-0!" />
      <AlertTitle>
        Benvenuto! il sito attualmente é in costruzione, ti invitiamo a visitare
        la pagina{" "}
        <Link href="/documentazione" className="underline">
          documentazione
        </Link>{" "}
        se vuoi iniziare ad imparare.
      </AlertTitle>
    </Alert>
  );
}

export { PageAlert };
