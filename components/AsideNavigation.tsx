import { AsideSubtitle } from "@/components/AsideSubtitle";
import { getDocsList } from "@/lib/docs";
import { ArticleLink } from "./ArticleLink";

interface Props {
  topic: string;
}

function AsideNavigation({ topic }: Props) {
  const navigation = getDocsList(topic);

  return (
    <aside className="flex flex-col text-sm">
      <AsideSubtitle>Articles</AsideSubtitle>
      <ul className="flex flex-col gap-2">
        {navigation.map((article) => (
          <ArticleLink key={article.slug} topic={topic} article={article} />
        ))}
        <li className="text-center mt-4 italic py-2 text-muted-foreground rounded-md">
          In arrivo...
        </li>
      </ul>
    </aside>
  );
}

export { AsideNavigation };
