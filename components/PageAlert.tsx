import Link from "next/link";
import { Alert, AlertTitle } from "./ui/alert";

function PageAlert() {
  return (
    <Alert className="bg-primary text-primary-foreground text-center rounded-none flex items-center justify-center py-1.5">
      <AlertTitle className="line-clamp-none">
        Sito in costruzione, ti invitiamo a visitare la pagina{" "}
        <Link href="/documentazione" className="underline">
          documentazione
        </Link>{" "}
        se vuoi iniziare ad imparare.
      </AlertTitle>
    </Alert>
  );
}

export { PageAlert };
