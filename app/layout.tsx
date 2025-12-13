import "./globals.css";

interface Props {
  readonly children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground dark">{children}</body>
    </html>
  );
}
