import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-stone-50 text-stone-800">
  <nav className="mx-auto flex w-full max-w-2xl gap-6 px-6 py-6 text-sm">
  <a href="/">Home</a>
  <a href="/about">About</a>
  <a href="/writing">Writing</a>
  </nav>

  {children}
</body>
    </html>
  );
}
