import Link from "next/link";

import { Button } from "@/components/ui/button";
import { HoverLink } from "@/components/HoverLink";
import { Logo } from "@/components/Logo";

import { Clock, ShoppingCart } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

function Navbar() {
  return (
    <header className="fixed h-15 flex w-full items-center z-1 backdrop-blur-3xl bg-background/90 border-b">
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
                <ul className="grid w-80 gap-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="#" className="cursor-not-allowed">
                        <div className="font-medium flex items-center justify-between text-muted-foreground">
                          <div className="font-bold">Javascript</div>
                          <div className="flex items-center italic gap-1">
                            <Clock className="size-3.5" />
                            In arrivo
                          </div>
                        </div>
                        <div className="text-muted-foreground">Impara lo sviluppo moderno con Javascript</div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#" className="cursor-not-allowed">
                        <div className="font-medium flex items-center justify-between text-muted-foreground">
                          <div>React</div>
                          <div className="flex items-center italic gap-1">
                            <Clock className="size-3.5" />
                            In arrivo
                          </div>
                        </div>
                        <div className="text-muted-foreground">Costruisci UIs con il framework piú popolare</div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#" className="cursor-not-allowed">
                        <div className="font-medium flex items-center justify-between text-muted-foreground">
                          <div>Next.js</div>
                          <div className="flex items-center italic gap-1">
                            <Clock className="size-3.5" />
                            In arrivo
                          </div>
                        </div>
                        <div className="text-muted-foreground">Full-stack development basato su React</div>
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
              <NavigationMenuContent>
                <ul className="grid w-80 gap-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/documentazione">
                        <div className="font-medium">Documentazione</div>
                        <div className="text-muted-foreground">Tutte le documentazioni necessarie per sviluppare</div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
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
