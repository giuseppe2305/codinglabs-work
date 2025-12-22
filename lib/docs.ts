import { readdirSync, readFileSync } from "fs";
import path from "path";

const CONTENT_PATH = path.join(process.cwd(), "content");

export function getDoc(topic: string, slug: string) {
  const file = addFilePrefix(topic, slug);
  const fullPath = path.join(CONTENT_PATH, topic, `${file}`);

  return readFileSync(fullPath, "utf-8");
}

export function getDocsList(topic: string) {
  const dir = path.join(CONTENT_PATH, topic);

  return readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .sort()
    .map((file) => ({
      slug: file.replace(/^\d+-/, "").replace(".mdx", ""),
      title: file.replace(/^\d+-/, "").replace(".mdx", ""),
    }));
}

function addFilePrefix(topic: string, slug: string) {
  const directory = readdirSync(`content/${topic}`);
  const file = directory.find((file) => file.includes(`${slug}.mdx`));

  return file;
}
