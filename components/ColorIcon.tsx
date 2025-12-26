import type { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  color?: string;
}

function ColorIcon({ icon: Icon, color = "text-primary bg-primary/5" }: Props) {
  return <Icon className={`p-2 rounded-full size-9 ${color}`} />;
}

export { ColorIcon };
