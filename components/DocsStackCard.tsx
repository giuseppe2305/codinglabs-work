import { Card, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { InFutureLabel } from "./InFutureLabel";

interface Props {
  title: string;
  description: string;
  disabled?: boolean;
}

function DocsStackCard({ title, description, disabled = false }: Props) {
  return (
    <Link href={disabled ? "/" : `/documentazione/${title.toLowerCase()}`}>
      <Card
        className={`w-full h-full py-3 max-w-100 duration-150 hover:scale-101 shadow-md hover:shadow-lg ${
          disabled
            ? "cursor-not-allowed hover:border-destructive/30 hover:shadow-destructive/10"
            : "cursor-pointer hover:bg-secondary hover:border-primary/30 hover:shadow-primary/10"
        }`}
      >
        <CardContent className="px-4">
          <CardTitle className={disabled ? "text-muted-foreground flex items-center justify-between" : ""}>
            <span className="text-lg flex items-center gap-3">
              <div className={`size-1 rounded-full ${disabled ? "bg-destructive" : "bg-primary"}`}></div>
              {title}
            </span>
            {disabled && <InFutureLabel />}
          </CardTitle>
          <CardDescription className={`mt-1.5 ${disabled ? "text-muted-foreground" : ""}`}>
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}

export { DocsStackCard };
