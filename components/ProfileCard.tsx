import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Verified } from "lucide-react";

function ProfileCard() {
  return (
    <div className="flex items-center gap-2 pb-5">
      <Avatar>
        <AvatarImage />
        <AvatarFallback>GC</AvatarFallback>
      </Avatar>
      <span>Giuseppe Crescitelli</span>
      <Badge className="aspect-square p-0.5">
        <Verified />
      </Badge>
    </div>
  );
}

export { ProfileCard };
