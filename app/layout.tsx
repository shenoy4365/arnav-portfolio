import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arnav Shenoy",
  description: "High school student researcher interested in machine learning, computational biology, and neuroscience. Research intern at Carnegie Mellon University.",
  keywords: ["portfolio", "machine learning", "computational biology", "research", "AI", "neuroscience"],
  authors: [{ name: "Arnav Shenoy" }],
  creator: "Arnav Shenoy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arnavshenoy.com",
    title: "Arnav Shenoy",
    description: "High school student researcher interested in machine learning, computational biology, and neuroscience.",
    siteName: "Arnav Shenoy",
  },
  twitter: {
    card: "summary",
    title: "Arnav Shenoy",
    description: "High school student researcher interested in machine learning, computational biology, and neuroscience.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
