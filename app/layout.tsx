import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Literata } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const literata = Literata({
  subsets: ["latin"],
  variable: "--font-literata",
  display: "swap",
});

export const metadata: Metadata = {
   title: "Praxiated",
  description: "Thoughts-- of varying coherency and structure",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
  lang="en"
  className={`${geistSans.variable} ${geistMono.variable} ${literata.variable} h-full antialiased`}
>
      <body className="min-h-full flex flex-col bg-stone-50 text-stone-800 font-[var(--font-literata)]">
  import Link from "next/link";

<nav className="mx-auto flex w-full max-w-2xl gap-6 px-6 py-6 text-sm">
  <Link href="/">Home</Link>
  <Link href="/go">Go</Link>
  <Link href="/life">Life</Link>
</nav>

  {children}
</body>
    </html>
  );
}
