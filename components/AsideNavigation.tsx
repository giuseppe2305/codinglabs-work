import { AsideSubtitle } from "@/components/AsideSubtitle";
import { getDocsList } from "@/lib/docs";
import { ArticleLink } from "./ArticleLink";
import { InFutureLabel } from "./InFutureLabel";

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
            <ul className="flex flex-col gap-1.5">
              {s.pages.map((p) => (
                <ArticleLink topic={topic} article={p} key={p} />
              ))}
            </ul>
          </li>
        ))}
        <InFutureLabel className="self-center mt-4" />
      </ul>
    </aside>
  );
}

export { AsideNavigation };
