import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  readonly children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-foreground dark`}>{children}</body>
    </html>
  );
}
