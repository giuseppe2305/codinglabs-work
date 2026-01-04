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
        className={`${inter.className} bg-background relative text-foreground dark flex flex-col max-w-screen`}
      >
        <div
          className="pointer-events-none fixed top-0 -left-50 size-100
           rounded-full bg-linear-to-r from-lime-500/25 to-blue-500/25 blur-[150px]"
        ></div>
        <div
          className="pointer-events-none fixed bottom-0 -right-32 h-150 w-100
           rounded-full bg-linear-to-l from-rose-600/25 to-blue-500/25 blur-[150px]"
        ></div>
        <PageAlert />
        <Navbar />
        <div className="min-h-screen flex flex-col">{children}</div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
