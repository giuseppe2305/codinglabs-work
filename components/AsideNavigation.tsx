import { AsideSubtitle } from "@/components/AsideSubtitle";
import { getDocsList } from "@/lib/docs";
import { ArticleLink } from "./ArticleLink";

interface Props {
  topic: string;
}

function AsideNavigation({ topic }: Props) {
  const sections = getDocsList(topic);

  return (
    <aside className="flex flex-col text-sm">
      <ul className="flex flex-col gap-2">
        {sections.map((s) => (
          <div key={s.section}>
            <AsideSubtitle>{s.section}</AsideSubtitle>
            {s.pages.map((p) => (
              <ArticleLink topic={topic} article={p} key={p} />
            ))}
          </div>
        ))}
        <li className="text-center mt-4 italic py-2 text-muted-foreground rounded-md">In arrivo...</li>
      </ul>
    </aside>
  );
}

export { AsideNavigation };
