import { AsideSubtitle } from "@/components/AsideSubtitle";
import Link from "next/link";

interface AsideNavigation {
  subtitle: string;
  content: string[];
}

interface Props {
  navigation: AsideNavigation[];
}

function AsideNavigation({ navigation }: Props) {
  return (
    <aside className="flex flex-col text-sm">
      {navigation.map((section) => (
        <div className="not-first:mt-6" key={section.subtitle}>
          <AsideSubtitle>{section.subtitle}</AsideSubtitle>
          <div className="flex flex-col gap-2">
            {section.content.map((page) => (
              <Link
                href={`javascript/${page.toLowerCase()}`}
                className="hover:bg-accent hover:text-accent-foreground duration-150 px-4 py-1.5 rounded-md cursor-pointer"
                key={page}
              >
                {page}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </aside>
  );
}

export { AsideNavigation };
