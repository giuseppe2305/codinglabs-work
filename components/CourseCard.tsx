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
import { AlertCircle, Clock, Info, ShoppingCart } from "lucide-react";

import { Alert, AlertTitle } from "./ui/alert";
import type { CourseInfo } from "@/types/CourseInfo";
import { CourseImagePlaceholder } from "./CourseImagePlaceholder";
import Image from "next/image";

interface Props {
  disabled?: boolean;
  courseInfo: CourseInfo;
}

function CourseCard({ disabled, courseInfo: info }: Props) {
  return (
    <Card
      className={`pt-0 pb-4 gap-0 overflow-hidden rounded-md w-full max-w-120 mx-auto shadow-xl duration-150 hover:scale-101 ${
        disabled
          ? "hover:shadow-black/25 cursor-not-allowed"
          : "hover:shadow-primary/10 cursor-pointer"
      }`}
    >
      {disabled ? (
        <CourseImagePlaceholder />
      ) : (
        <div className="w-full aspect-2/1 relative">
          <Image src={`/courses/${info.image}`} alt="Course Picture" fill />
        </div>
      )}
      <CardHeader className="mt-4 px-4">
        <div className="flex items-center justify-between">
          {info.tags.map((tag) => (
            <Badge key={tag} className="text-primary bg-primary/5">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="mt-1 mb-5">
        <CardTitle className="text-lg">{info.title}</CardTitle>
        <CardDescription className="line-clamp-2">
          {info.description}
        </CardDescription>
        {!disabled && (
          <div className="flex items-center justify-between mt-5">
            <Badge variant="secondary">
              <Clock />
              {info.length} ore
            </Badge>
            <span className="text-xl font-bold">€{info.price.toFixed(2)}</span>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex flex-col items-stretch gap-2 mt-auto">
        {disabled ? (
          <Alert className="text-foreground">
            <AlertCircle />
            <AlertTitle>Attualmente non disponibile</AlertTitle>
          </Alert>
        ) : (
          <>
            <Button>
              <ShoppingCart />
              Acquista ora
            </Button>
            <Button variant="secondary" className="text-foreground">
              <Info />
              Maggiori informazioni
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  );
}

export { CourseCard };
