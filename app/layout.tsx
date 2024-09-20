import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Next Js Supabase Auth",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="fixed top-0 left-0 flex w-full justify-center gap-4 px-4 py-3 bg-slate-800 z-50 shadow-lg">
          <Link
            href={"/"}
            className="px-4 py-0.5 rounded-lg bg-gray-900 text-gray-100 text-lg font-sans font-normal"
          >
            Home
          </Link>
          <Link
            href={"/auth"}
            className="px-4 py-0.5 rounded-lg bg-gray-900 text-gray-100 text-lg font-sans font-normal"
          >
            Sign In
          </Link>
        </nav>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
