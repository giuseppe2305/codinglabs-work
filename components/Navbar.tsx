"use client";

import Link from "next/link";
import { Logo } from "@/components/Logo";

import { Clock } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { NavigationListItem } from "./NavigationListItem";

function Navbar() {
  return (
    <header className="sticky top-0 h-15 flex w-full items-center z-1 backdrop-blur-3xl bg-background/90 border-b">
      <nav className="w-full grid grid-cols-[1fr_auto_1fr] items-center mx-auto px-2 sm:px-4">
        <Logo />
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/corsi"
                className={navigationMenuTriggerStyle()}
              >
                Corsi
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/"
                className={navigationMenuTriggerStyle()}
              >
                Bundles
              </NavigationMenuLink>
              <NavigationMenuContent>
                <ul className="grid w-80 gap-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/" className="cursor-not-allowed">
                        <div className="font-medium flex items-center justify-between text-muted-foreground">
                          <div>Bundle Frontend</div>
                          <div className="flex items-center italic gap-1">
                            <Clock className="size-3.5" />
                            In arrivo
                          </div>
                        </div>
                        <div className="text-muted-foreground">
                          Tutto quello che ti serve per diventare uno
                          sviluppatore frontend nel 2026
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Risorse</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-80 gap-4">
                  <NavigationListItem
                    data={{
                      link: "/documentazione",
                      label: "Documentazione",
                      description:
                        "Tutte le documentazioni necessarie per il tuo apprendimento",
                    }}
                  />

                  <NavigationListItem
                    disabled
                    data={{
                      link: "/",
                      label: "Esercizi",
                      description:
                        "Centinaia di esercizi per migliorare le tue competenze",
                    }}
                  />

                  <NavigationListItem
                    disabled
                    data={{
                      link: "/",
                      label: "Softwares e Tools",
                      description:
                        "Esplora i softwares e tools utilizzati nello sviluppo moderno",
                    }}
                  />
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="justify-self-end flex items-center gap-4"></div>
      </nav>
    </header>
  );
}

export { Navbar };
