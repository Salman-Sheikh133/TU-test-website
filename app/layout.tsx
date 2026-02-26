import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trickle Up — Faster. Leaner. Smarter.",
  description: "Ideas are easy, execution is everything. We engineer growth for ambitious businesses — faster, leaner, smarter.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
