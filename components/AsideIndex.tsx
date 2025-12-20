import { AsideSubtitle } from "@/components/AsideSubtitle";

function AsideIndex() {
  return (
    <aside className="text-sm flex flex-col">
      <AsideSubtitle>Indice</AsideSubtitle>
      <div className="flex flex-col gap-2">
        <div className="hover:bg-accent hover:text-accent-foreground duration-150 px-4 py-1.5 rounded-md cursor-pointer">
          Introduzione a Javascript
        </div>
        <div className="hover:bg-accent hover:text-accent-foreground duration-150 px-4 py-1.5 rounded-md cursor-pointer">
          Lo sviluppo di Javascript
        </div>
        <div className="hover:bg-accent hover:text-accent-foreground duration-150 px-4 py-1.5 rounded-md cursor-pointer">
          Un linguaggio complesso
        </div>
      </div>
    </aside>
  );
}

export { AsideIndex };
