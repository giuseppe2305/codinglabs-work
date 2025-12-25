import { AsideSubtitle } from "@/components/AsideSubtitle";
import { getDocsList } from "@/lib/docs";
import { InFutureLabel } from "./InFutureLabel";
import { AsideList } from "./AsideList";
import { ArticleLink } from "./ArticleLink";

interface Props {
  topic: string;
}

function AsideNavigation({ topic }: Props) {
  const sections = getDocsList(topic);

  return (
    <aside className="text-sm">
      <ul className="flex flex-col gap-2">
        {sections.map((s) => (
          <li key={s.section} className="not-first:mt-6">
            <AsideSubtitle>{s.section}</AsideSubtitle>
            <AsideList>
              {s.pages.map((page) => (
                <ArticleLink key={page} article={page} topic={topic} />
              ))}
            </AsideList>
          </li>
        ))}
        <InFutureLabel className="self-center mt-4" />
      </ul>
    </aside>
  );
}

export { AsideNavigation };
