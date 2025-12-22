"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  topic: string;
  article: {
    slug: string;
    title: string;
  };
}

function ArticleLink({ topic, article }: Props) {
  const pathname = usePathname();
  const isActive = pathname.includes(`documentazione/${topic}/${article.slug}`);

  return (
    <li
      className={`p-2 rounded-md ${
        isActive ? "bg-accent text-accent-foreground " : null
      }`}
      key={article.slug}
    >
      <Link
        className="capitalize block"
        href={`/documentazione/${topic}/${article.slug}`}
      >
        {article.title}
      </Link>
    </li>
  );
}

export { ArticleLink };
