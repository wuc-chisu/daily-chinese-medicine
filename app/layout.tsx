import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daily Chinese Medicine",
  description: "Daily Chinese medicine, health, and seasonal wellness posts."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
