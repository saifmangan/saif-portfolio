import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saif Mangan — AI & Data Science Portfolio",
  description:
    "Portfolio of Saif Mangan. AI systems, data science, analytics and enterprise product work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}