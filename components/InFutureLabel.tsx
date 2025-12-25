import { Clock } from "lucide-react";

function InFutureLabel() {
  return (
    <div className="flex items-center italic gap-1">
      <Clock className="size-3.5" />
      In arrivo
    </div>
  );
}

export { InFutureLabel };
