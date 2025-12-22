import { AsideSubtitle } from "@/components/AsideSubtitle";
import { getDocsList } from "@/lib/docs";
import Link from "next/link";

interface Props {
  topic: string;
}

function AsideNavigation({ topic }: Props) {
  const navigation = getDocsList(topic);

  return (
    <aside className="flex flex-col text-sm">
      <AsideSubtitle>Articles</AsideSubtitle>
      <ul>
        {navigation.map((article) => (
          <li className="not-first:mt-6" key={article.slug}>
            <Link
              href={`/documentazione/${topic}/${article.slug}`}
              className="flex flex-col gap-2"
            >
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export { AsideNavigation };
