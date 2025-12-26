import type { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
}

function ColorIcon({ icon: Icon }: Props) {
  return <Icon className="text-primary bg-primary/5 p-2 rounded-full size-9" />;
}

export { ColorIcon };
