import { Logo } from "./Logo";

export default function Footer() {
  return (
    <footer className="py-12 border-t">
      <div className="w-full max-w-400 mx-auto px-4 flex items-center justify-between">
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
