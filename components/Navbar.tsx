import Image from "next/image";

import { Button } from "@/components/ui/button";
import { HoverLink } from "@/components/HoverLink";
import { ShoppingCart } from "lucide-react";

function Navbar() {
  return (
    <header className="fixed py-3 w-full items-center">
      <div className="w-[95%] grid grid-cols-[1fr_auto_1fr] items-center mx-auto">
        <div className="size-12 relative">
          <Image fill src="/logo.svg" alt="logo" sizes="48px" />
        </div>
        <nav className="flex items-center gap-12">
          <HoverLink href="#">Corsi</HoverLink>
          <HoverLink href="#">Bundle</HoverLink>
          <HoverLink href="#">Risorse</HoverLink>
        </nav>
        <div className="justify-self-end flex items-center gap-8">
          <HoverLink href="#">
            <ShoppingCart />
          </HoverLink>
          <Button>Accedi</Button>
        </div>
      </div>
    </header>
  );
}

export { Navbar };
