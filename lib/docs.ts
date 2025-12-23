import { readdirSync, readFileSync } from "fs";
import path from "path";

const CONTENT_PATH = path.join(process.cwd(), "content");

export function getDoc(topic: string, slug: string) {
  const file = getFile(topic, slug);
  if (!file) throw new Error("File not found.");

  return readFileSync(file, "utf-8");
}

export function getDocsList(topic: string) {
  const topicDir = path.join(CONTENT_PATH, topic);
  const sections = readdirSync(topicDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .sort((a, b) => {
      const aNum = parseInt(a.name.split("-")[0]);
      const bNum = parseInt(b.name.split("-")[0]);
      return aNum - bNum;
    });

  const result = sections.map((sectionDir) => {
    const sectionName = sectionDir.name.replace(/^\d+-/, "");

    const sectionPath = path.join(topicDir, sectionDir.name);
    const files = readdirSync(sectionPath, { withFileTypes: true })
      .filter((f) => f.isFile() && f.name.endsWith(".mdx"))
      .sort((a, b) => {
        const aNum = parseInt(a.name.split("-")[0]);
        const bNum = parseInt(b.name.split("-")[0]);
        return aNum - bNum;
      })
      .map((f) => f.name.replace(/^\d+-/, "").replace(".mdx", ""));

    return { section: sectionName, pages: files };
  });

  return result;
}

function getFile(topic: string, slug: string) {
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
