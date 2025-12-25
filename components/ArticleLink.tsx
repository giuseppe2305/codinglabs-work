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
    <Link href={`/documentazione/${topic}/${article}`}>
      <li
        className={`py-2 hover:translate-x-0.5 capitalize px-4 rounded-md duration-150 ${
          isActive
            ? "bg-primary/5 text-primary font-semibold"
            : "hover:bg-accent"
        }`}
        key={article}
      >
        {article}
      </li>
    </Link>
  );
}

export { ArticleLink };
