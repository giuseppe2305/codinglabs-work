"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  topic: string;
  article: string;
}

function ArticleLink({ topic, article }: Props) {
  const pathname = usePathname();
  const isActive = pathname.includes(`documentazione/${topic}/${article}`);

  return (
    <li className={`p-2 rounded-md ${isActive ? "bg-accent text-accent-foreground " : null}`} key={article}>
      <Link className="capitalize block" href={`/documentazione/${topic}/${article}`}>
        {article}
      </Link>
    </li>
  );
}

export { ArticleLink };
