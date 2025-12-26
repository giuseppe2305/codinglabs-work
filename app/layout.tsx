import "./globals.css";
import { Inter } from "next/font/google";

import type { Metadata } from "next";
import type { ChildrenNode } from "@/types/ChildrenNode";

import { Analytics } from "@vercel/analytics/next";
import { Navbar } from "@/components/Navbar";
import { PageAlert } from "@/components/PageAlert";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coding Labs",
  description: "Diventa uno sviluppatore, studiando in italiano.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo/logo-dark.svg",
      },

      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo/logo-light.svg",
      },
    ],
  },
};

export default function RootLayout({ children }: ChildrenNode) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${inter.className} bg-background text-foreground dark flex flex-col max-w-screen`}
      >
        <PageAlert />
        <Navbar />
        <div className="min-h-screen flex flex-col">{children}</div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
