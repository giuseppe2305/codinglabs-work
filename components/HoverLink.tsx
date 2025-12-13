import Link from "next/link";

interface Props {
  children: React.ReactNode;
  href: string;
}

function HoverLink({ children, href }: Props) {
  return (
    <Link href={href} className="hover:text-primary-foreground duration-150">
      {children}
    </Link>
  );
}

export { HoverLink };
