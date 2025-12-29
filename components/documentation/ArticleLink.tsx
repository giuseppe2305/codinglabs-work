"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  topic: string;
  article: string;
}

function ArticleLink({ topic, article }: Props) {
  const pathname = usePathname();
  const isActive = pathname.includes(
    `documentazione/${topic}/${article.replaceAll(" ", "%20")}`
  );

  return (
    <Link
      className={`p-2 rounded-md capitalize duration-150 hover:translate-x-0.5
        ${
          isActive
            ? "bg-primary/5 text-primary font-semibold"
            : "hover:bg-accent hover:text-accent-foreground"
        }
      `}
      href={`/documentazione/${topic}/${article}`}
    >
      {article}
    </Link>
  );
}

export { ArticleLink };
