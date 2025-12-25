import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock, Info, ShoppingCart } from "lucide-react";

import { InFutureLabel } from "@/components/InFutureLabel";

function CourseCard() {
  return (
    <Card className="pt-0 pb-4 gap-0 overflow-hidden rounded-md w-full max-w-120 mx-auto shadow-xl hover:shadow-primary/10 duration-150 hover:scale-101 cursor-pointer">
      <div className="aspect-2/1 bg-linear-to-b from-sky-400 to-sky-700 w-full flex items-center justify-center text-2xl">
        Corso di CSS Moderno
      </div>
      <CardHeader className="mt-4 px-4">
        <div className="flex items-center justify-between">
          <Badge className="text-primary bg-primary/5">
            Frontend Development
          </Badge>
          <InFutureLabel />
        </div>
      </CardHeader>
      <CardContent className="mt-1">
        <CardTitle className="text-lg">CSS Moderno</CardTitle>
        <CardDescription className="line-clamp-2">
          Corso di CSS moderno pensato per chi vuole portare ad un livello
          superiore le proprie competenze in CSS
        </CardDescription>
        <div className="flex items-center justify-between mt-5">
          <Badge variant="secondary">
            <Clock />8 ore
          </Badge>
          <span className="text-xl font-bold">$29.99</span>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-stretch gap-2 mt-5">
        <Button>
          <ShoppingCart />
          Acquista ora
        </Button>
        <Button variant="secondary" className="text-foreground">
          <Info />
          Maggiori informazioni
        </Button>
      </CardFooter>
    </Card>
  );
}

export { CourseCard };
