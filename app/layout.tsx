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

  robots: {
    index: true,
    follow: true,
  },

  verification: {
    google: "1quHgETRe6wnQdGZME0gv2OaIlkwTofowNqYimM9o4k",
  },
};

export default function RootLayout({ children }: ChildrenNode) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={`${inter.className} bg-background relative text-foreground dark flex flex-col max-w-screen`}>
        <div
          className="-z-1 pointer-events-none fixed top-10 sm:top-0 left-0 sm:-left-20 md:-left-50 size-30 sm:size-70 md:size-100
           rounded-full bg-linear-to-r from-lime-500/25 to-blue-500/25 blur-2xl sm:blur-[100px] md:blur-[150px]"
        ></div>
        <div
          className="-z-1 pointer-events-none fixed bottom-0 aspect-2/3 xl:-right-32 w-30 sm:w-40 right-0 blur-3xl md:blur-[80px] xl:w-100
           rounded-full bg-linear-to-l from-rose-600/25 to-blue-500/25 xl:blur-[150px]"
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
