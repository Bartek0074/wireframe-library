import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navigation02 } from "@/blocks/Navigation/Navigation02/Navigation02";

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Wireframe Library",
  description: "Reusable wireframe and prototype template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", inter.variable, geist.variable)}
    >
      <body className="min-h-full flex flex-col">
        <Navigation02 />
        {children}
      </body>
    </html>
  );
}
