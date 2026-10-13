import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Claire's Braiding Studio | Braiding in Plano, TX",
  description:
    "Independent website concept for Claire's Braiding Studio in Plano, Texas. Explore braiding inspiration and prepare a booking enquiry.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}