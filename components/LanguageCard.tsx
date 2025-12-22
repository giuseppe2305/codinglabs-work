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
}

function LanguageCard({ title, description }: Props) {
  return (
    <Link href={`/documentazione/${title.toLowerCase()}/introduzione`}>
      <Card className="w-100 hover:bg-secondary cursor-pointer">
        <CardContent>
          <CardTitle className="text-lg flex items-center gap-3">
            <div className="size-1 rounded-full bg-primary"></div>
            {title}
          </CardTitle>
          <CardDescription className="mt-4">{description}</CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}

export { LanguageCard };
