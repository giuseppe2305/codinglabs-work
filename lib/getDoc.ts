import fs from "fs";
import path from "path";

const CONTENT_PATH = path.join(process.cwd(), "content");

export function getDoc(topic: string, slug: string) {
  const fullPath = path.join(CONTENT_PATH, topic, `${slug}.mdx`);

  return fs.readFileSync(fullPath, "utf-8");
}
