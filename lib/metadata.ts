import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CodingLabs - Documentazioni",
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
