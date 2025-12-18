import { Button } from "@/components/ui/button";
import { HoverLink } from "@/components/HoverLink";
import { Logo } from "@/components/Logo";

import { ShoppingCart } from "lucide-react";
import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu";

function Navbar() {
  return (
    <header className="fixed py-3 w-full items-center z-1 backdrop-blur-3xl bg-background/90">
      <div className="w-[95%] grid grid-cols-2 md:grid-cols-[1fr_auto_1fr] items-center mx-auto">
        <Logo />
        {/* <nav className="flex items-center gap-12 max-sm:hidden">
          <HoverLink href="#">Corsi</HoverLink>
          <HoverLink href="#">Bundle</HoverLink>
          <HoverLink href="#">Risorse</HoverLink>
        </nav> */}
        <NavigationMenu>
          <NavigationMenuList></NavigationMenuList>
        </NavigationMenu>
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
