import { readdirSync, readFileSync } from "fs";
import path from "path";

const CONTENT_PATH = path.join(process.cwd(), "content");

export function getDoc(topic: string, slug: string) {
  const file = addFilePrefix(topic, slug);
  if (!file) throw new Error("File not found.");

  return readFileSync(file, "utf-8");
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
  const directory = path.join(CONTENT_PATH, topic);
  const file = findFileRecursively(directory, slug);

  return file;
}

function findFileRecursively(dir: string, fileName: string): string | null {
  const files = readdirSync(dir, { withFileTypes: true });

  for (const file of files) {
    const fullPath = path.join(dir, file.name);

    if (file.isDirectory()) {
      const found = findFileRecursively(fullPath, fileName);
      if (found) return found;
    } else if (file.name.includes(fileName)) {
      return fullPath;
    }
  }

  return null;
}
