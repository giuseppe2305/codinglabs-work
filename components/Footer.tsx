import { Logo } from "./Logo";

function Footer() {
  return (
    <footer className="py-8 border-t bg-black/63 z-1 backdrop-blur-3xl">
      <div className="w-full max-w-400 mx-auto px-4 flex items-center max-sm:flex-col gap-8 justify-between">
        <div className="flex items-center gap-2 text-accent-foreground">
          <Logo />
          <h5>CodingLabs</h5>
        </div>
        <p className="text-sm text-muted-foreground font-medium">
          © {new Date().getFullYear()} CodingLabs. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export { Footer };
