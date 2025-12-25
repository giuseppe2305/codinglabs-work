import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="size-8 relative">
      <Image fill src="/logo/logo-light.svg" alt="logo" sizes="48px" />
    </Link>
  );
}

export { Logo };
