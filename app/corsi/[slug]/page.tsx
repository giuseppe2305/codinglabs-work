import { CourseContentSection } from "@/components/CourseContentSection";
import { ContentSource } from "@/components/documentation/ContentSource";
import { ProfileCard } from "@/components/documentation/ProfileCard";
import { IconLabel } from "@/components/IconLabel";
import { Section } from "@/components/Section/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { coursesInfo } from "@/data/coursesInfo";
import { getCourseContent } from "@/lib/getCourseContent";
import {
  Book,
  Check,
  CircleAlert,
  Clock,
  Library,
  ShoppingCart,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function page({ params }: Props) {
  const { slug } = await params;
  const course = coursesInfo.find((el) => el.link.includes(slug));

  if (!course) notFound();

  const chaptersCount = course.content.length;
  const lessonsCount = course.content.flatMap((chap) => chap.lessons).length;

  return (
    <>
      <Section className="grid grid-cols-1 lg:grid-cols-2 gap-x-16">
        <div className="flex flex-col gap-1">
          <Section.Title>{course.title}</Section.Title>
          <ProfileCard className="max-md:mx-auto mt-2 text-accent-foreground" />
          <Section.Subtitle className="max-md:text-center max-md:mt-4">
            {course.description}
          </Section.Subtitle>

          <div className="flex flex-wrap max-sm:flex-col gap-8 items-center mt-6 justify-between">
            <div className="grid grid-cols-3 sm:grid-cols-[auto_auto_auto] text-center gap-8">
              <IconLabel className="max-sm:flex-col" icon={Clock}>
                {`${course.length} ore`}
              </IconLabel>
              <IconLabel className="max-sm:flex-col" icon={Library}>
                {`${chaptersCount} capitoli`}
              </IconLabel>
              <IconLabel className="max-sm:flex-col" icon={Book}>
                {`${lessonsCount} lezioni`}
              </IconLabel>
            </div>

            <div className="relative">
              <span className="text-sm font-bold line-through absolute right-0 -top-4 text-destructive">
                €{course.price * 3}
              </span>
              <span className="text-4xl font-bold text-accent-foreground">
                €{course.price}
              </span>
            </div>
          </div>
          <Button size="lg" className="mt-8" asChild>
            <Link target="_blank" href={course.buyLink}>
              <ShoppingCart />
              Acquista Ora
            </Link>
          </Button>
        </div>
        <div className="relative max-lg:mt-12 mx-auto w-full max-w-120 aspect-2/1 row-span-3 rounded-md overflow-hidden shadow-2xl border-2 hover:shadow-black/50 hover:scale-101 duration-150">
          <Image src="/courses/tailwindcss.png" alt="Course Image" fill />
        </div>
      </Section>
      <Section className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-x-12 border-b-0">
        <Section.H3 className="col-span-full">Descrizione del Corso</Section.H3>
        <ContentSource source={getCourseContent(slug)} />
        <Card className="p-5 gap-0 max-w-100 max-md:mt-8 w-full mx-auto row-span-2 self-start md:sticky top-24">
          <CardHeader className="p-0">
            <CardTitle>Requisiti per il corso</CardTitle>
          </CardHeader>
          <CardContent className="mt-4 p-0 flex flex-col gap-3">
            <h4 className="text-foreground">Obbligatori</h4>
            <IconLabel icon={Check}>HTML5</IconLabel>
            <IconLabel icon={Check}>CSS3</IconLabel>

            <h4 className="text-foreground">Consigliati</h4>
            <IconLabel
              color="text-yellow-400 bg-yellow-400/5"
              icon={CircleAlert}
            >
              Javascript
            </IconLabel>
            <IconLabel
              color="text-yellow-400 bg-yellow-400/5"
              icon={CircleAlert}
            >
              Node.js
            </IconLabel>
          </CardContent>
        </Card>
        <Section.H3 className="col-span-full mt-12">
          Contenuto del Corso
        </Section.H3>
        <CourseContentSection content={course.content} />
      </Section>
    </>
  );
}
