import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hridoy Ahmed - Resume",
  description: "Resume of Hridoy Ahmed - Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="icon"
          href="https://cdn.10minuteschool.com/images/main/10ms_favicon.png"
          sizes="32x32"
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
