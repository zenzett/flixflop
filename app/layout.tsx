import "./global.css";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FlixFlop",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-background text-foreground">
      <body className="h-full">{children}</body>
    </html>
  );
}
