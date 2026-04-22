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
  title: "BBB Danışmanlık | Sağlıkta Verimlilik ve Gelir Yönetimi",
  description:
    "BBB Danışmanlık, sağlık kurumlarına gelir analizi, SUT danışmanlığı, süreç yönetimi ve verimlilik çözümleri sunar.",
  keywords: [
    "sağlık danışmanlığı",
    "SUT danışmanlığı",
    "gelir kaybı analizi",
    "hastane danışmanlığı",
    "sağlıkta veri analitiği",
    "özel hastane danışmanlığı",
  ],
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
