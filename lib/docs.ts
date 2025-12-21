import fs from "fs";
import path from "path";

const CONTENT_PATH = path.join(process.cwd(), "content");

export function getDoc(topic: string, slug: string) {
  const fullPath = path.join(CONTENT_PATH, topic, `${slug}.mdx`);

  return fs.readFileSync(fullPath, "utf-8");
}

export function getDocsList(topic: string) {
  const dir = path.join(CONTENT_PATH, topic);

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .sort()
    .map((file) => ({
      slug: file.replace(/^\d+-/, "").replace(".mdx", ""),
      title: file.replace(/^\d+-/, "").replace(".mdx", ""),
    }));
}
