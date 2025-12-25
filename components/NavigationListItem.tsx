import { InFutureLabel } from "./InFutureLabel";
import { NavigationMenuLink } from "./ui/navigation-menu";
import type { NavigationData } from "@/types/NavigationData";

interface Props {
  data: NavigationData;
  disabled?: boolean;
}

function NavigationListItem({ data, disabled = false }: Props) {
  return (
    <li>
      <NavigationMenuLink href={disabled ? "/" : data.link}>
        <div
          className={`font-medium flex items-center justify-between ${
            disabled ? "text-muted-foreground" : "text-white"
          }`}
        >
          <p>{data.label}</p>
          {disabled && <InFutureLabel />}
        </div>
        <div className="text-muted-foreground">{data.description}</div>
      </NavigationMenuLink>
    </li>
  );
}

export { NavigationListItem };
