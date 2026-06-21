import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Coin Analyzer",
  description: "Crypto futures analyzer dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
