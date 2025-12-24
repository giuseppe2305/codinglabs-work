import {
  Card,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  disabled?: boolean;
}

function DocsStackCard({ title, description, disabled = false }: Props) {
  return (
    <Link
      href={
        disabled ? "/" : `/documentazione/${title.toLowerCase()}/introduzione`
      }
    >
      <Card
        className={`w-full h-full max-w-100 ${
          disabled ? "cursor-not-allowed" : "cursor-pointer hover:bg-secondary"
        }`}
      >
        <CardContent>
          <CardTitle
            className={`text-lg flex items-center gap-3 ${
              disabled ? "text-muted-foreground" : ""
            }`}
          >
            <div
              className={` size-1 rounded-full ${
                disabled ? "bg-destructive" : "bg-primary"
              }`}
            ></div>
            {title}
          </CardTitle>
          <CardDescription
            className={`mt-3 ${disabled ? "text-muted-foreground/50" : ""}`}
          >
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}

export { DocsStackCard };
