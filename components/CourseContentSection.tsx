import { Play } from "lucide-react";
import { IconLabel } from "./IconLabel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { CourseContent } from "@/types/CourseInfo";

interface Props {
  content: CourseContent[];
}

function CourseContentSection({ content }: Props) {
  return (
    <Accordion type="multiple" className="mt-4 flex flex-col gap-4">
      {content.map((section) => (
        <AccordionItem key={section.title} value={section.title}>
          <AccordionTrigger>{section.title}</AccordionTrigger>
          <AccordionContent>
            {section.lessons.map((lesson) => (
              <IconLabel key={lesson} icon={Play}>
                {lesson}
              </IconLabel>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export { CourseContentSection };
