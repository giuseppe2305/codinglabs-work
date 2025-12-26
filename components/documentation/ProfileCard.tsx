import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ClassName } from "@/types/ClassName";
import { Verified } from "lucide-react";

function ProfileCard({ className }: ClassName) {
  return (
    <div className={`flex items-center gap-2 pb-5 ${className}`}>
      <Avatar>
        <AvatarImage src="/profile-picture.jpg" />
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
