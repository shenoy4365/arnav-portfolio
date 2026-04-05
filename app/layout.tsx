import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arnav Shenoy",
  description: "Personal portfolio and professional information",
  keywords: ["portfolio", "developer", "engineer"],
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
