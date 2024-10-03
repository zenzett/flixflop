import "./global.css";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FlixFlop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-dark-90 text-gray-400">
      <body className="h-full">{children}</body>
    </html>
  );
}
