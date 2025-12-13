import "./globals.css";
import { Inter } from "next/font/google";
import type { ChildrenNode } from "@/types/ChildrenNode";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: ChildrenNode) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-foreground dark flex flex-col w-screen divide-y`}>
        {children}
      </body>
    </html>
  );
}
