import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navigation04 } from "@/blocks/Navigation/Navigation04/Navigation04";
import { ThemeToggleFab } from "@/components/molecules/ThemeToggleFab/ThemeToggleFab";

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
  const initThemeScript = `(() => {
    const storedTheme = window.localStorage.getItem('theme-mode');
    const isDark = storedTheme
      ? storedTheme === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', isDark);
  })();`;

  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", inter.variable, geist.variable)}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: initThemeScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        <Navigation04 />
        {children}
        <ThemeToggleFab />
      </body>
    </html>
  );
}
