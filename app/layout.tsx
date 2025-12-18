import "./globals.css";
import { Inter } from "next/font/google";
import type { ChildrenNode } from "@/types/ChildrenNode";

import { Analytics } from "@vercel/analytics/next";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: ChildrenNode) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-foreground dark flex flex-col max-w-screen`}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
