import Image from "next/image";

import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

function Navbar() {
  return (
    <header className="grid grid-cols-[1fr_auto_1fr] py-3 w-[95%] mx-auto items-center">
      <div className="size-13 relative">
        <Image fill src="/logo.svg" alt="logo" sizes="52px" />
      </div>
      <nav className="flex items-center gap-12">
        <div>Corsi</div>
        <div>Bundle</div>
        <div>Risorse</div>
      </nav>
      <div className="justify-self-end flex items-center gap-8">
        <ShoppingCart />
        <Button>Accedi</Button>
      </div>
    </header>
  );
}

export { Navbar };
