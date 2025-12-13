import Image from "next/image";

function Navbar() {
  return (
    <header className="grid grid-cols-[1fr_auto_1fr] py-3 px-4 w-[95%] mx-auto items-center">
      <div className="size-13 relative">
        <Image fill src="/logo.svg" alt="logo" sizes="52px" />
      </div>
      <nav className="flex items-center gap-10">
        <div>Corsi</div>
        <div>Bundle</div>
        <div>Risorse</div>
      </nav>
      <div className="justify-self-end">CTA</div>
    </header>
  );
}

export { Navbar };
