import { HoverLink } from "@/components/HoverLink";

function AsideNavigation() {
  return (
    <aside>
      <div className="flex flex-col text-sm gap-4">
        <span className="px-3 font-medium uppercase border-b py-1 not-first:mt-4">Introduzione a Javascript</span>
        <HoverLink href="#">Introduzione</HoverLink>
        <HoverLink href="#">Versioni</HoverLink>
        <HoverLink href="#">Storia</HoverLink>
        <HoverLink href="#">Sintassi</HoverLink>

        <span className="px-3 font-medium uppercase border-b py-1 not-first:mt-4">Introduzione a Javascript</span>
        <HoverLink href="#">Introduzione</HoverLink>
        <HoverLink href="#">Versioni</HoverLink>
        <HoverLink href="#">Storia</HoverLink>
        <HoverLink href="#">Sintassi</HoverLink>
      </div>
    </aside>
  );
}

export { AsideNavigation };
