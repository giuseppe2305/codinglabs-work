import { AsideSubtitle } from "@/components/AsideSubtitle";
import { getDocsList } from "@/lib/docs";

interface Props {
  topic: string;
}

function AsideNavigation({ topic }: Props) {
  const navigation = getDocsList(topic);

  return (
    <aside className="flex flex-col text-sm">
      <AsideSubtitle>Articles</AsideSubtitle>
      {navigation.map((article) => (
        <div className="not-first:mt-6" key={article.slug}>
          <div className="flex flex-col gap-2">{article.title}</div>
        </div>
      ))}
    </aside>
  );
}

export { AsideNavigation };
