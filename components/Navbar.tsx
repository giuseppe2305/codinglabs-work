import { Button } from "@/components/ui/button";
import { HoverLink } from "@/components/HoverLink";
import { Logo } from "@/components/Logo";

import { ShoppingCart } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

function Navbar() {
  return (
    <header className="fixed py-3 w-full items-center z-1 backdrop-blur-3xl bg-background/90">
      <div className="w-[95%] grid grid-cols-2 md:grid-cols-[1fr_auto_1fr] items-center mx-auto">
        <Logo />
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Corsi</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-75 gap-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="#">
                        <div className="font-medium">Javascript</div>
                        <div className="text-muted-foreground">Learn modern Javascript development</div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#">
                        <div className="font-medium">React</div>
                        <div className="text-muted-foreground">Build UIs with the React Framework</div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#">
                        <div className="font-medium">Next.js</div>
                        <div className="text-muted-foreground">Build Fullstack applications with React</div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Bundle</NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Risorse</NavigationMenuTrigger>
            </NavigationMenuItem>
          </NavigationMenuList>
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
