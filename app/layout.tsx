import "./globals.css";
import { Inter } from "next/font/google";
import type { ChildrenNode } from "@/types/ChildrenNode";

import { Analytics } from "@vercel/analytics/next";
import { Navbar } from "@/components/Navbar";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { Smile } from "lucide-react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: ChildrenNode) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background min-h-screen text-foreground dark flex flex-col max-w-screen`}>
        <Alert className="bg-primary rounded-none flex items-center justify-center">
          <Smile className="translate-y-0!" />
          <AlertTitle>
            Benvenuto! il sito attualmente é in costruzione, ti invitiamo a visitare la pagina{" "}
            <Link href="/documentazione" className="underline">
              Documentazione
            </Link>{" "}
            se vuoi iniziare ad imparare.
          </AlertTitle>
        </Alert>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
