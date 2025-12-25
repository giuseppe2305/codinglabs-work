import type { ClassName } from "@/types/ClassName";

import { Badge } from "./ui/badge";
import { Clock } from "lucide-react";

function InFutureLabel({ className }: ClassName) {
  return (
    <Badge variant="secondary" className={`italic ${className}`}>
      <Clock />
      In arrivo
    </Badge>
  );
}

export { InFutureLabel };
