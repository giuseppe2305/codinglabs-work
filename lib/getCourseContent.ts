import { readFileSync } from "fs";
import path from "path";

export function getCourseContent(course: string) {
  const file = path.join(process.cwd(), `/data/courses/content/${course}.mdx`);
  return readFileSync(file, "utf-8");
}
