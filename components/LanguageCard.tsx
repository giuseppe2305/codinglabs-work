import { Card, CardTitle, CardContent, CardDescription } from "@/components/ui/card";

function LanguageCard() {
  return (
    <Card className="w-100 hover:bg-secondary cursor-pointer">
      <CardContent>
        <CardTitle className="text-lg flex items-center gap-3">
          <div className="size-1 rounded-full bg-primary"></div>Javascript
        </CardTitle>
        <CardDescription className="mt-4">
          Il linguaggio di programmazione per eccellenza nello sviluppo web, sia per il frontend che per il backend.
        </CardDescription>
      </CardContent>
    </Card>
  );
}

export { LanguageCard };
