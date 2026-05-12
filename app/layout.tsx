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
  metadataBase: new URL("https://www.bbbdanismanlik.com.tr"),

  title: {
    default: "BBB Danışmanlık | Sağlıkta Verimlilik ve Gelir Yönetimi",
    template: "%s | BBB Danışmanlık",
  },

  description:
    "BBB Danışmanlık, sağlık kurumlarına SUT analizi, Medula faturalama, gelir yönetimi ve verimlilik çözümleri sunar.",

  keywords: [
    "sağlık danışmanlığı",
    "SUT danışmanlığı",
    "medula faturalama",
    "hastane gelir analizi",
    "sağlık veri analitiği",
    "özel hastane danışmanlığı",
    "hbys danışmanlık",
  ],

  authors: [{ name: "BBB Danışmanlık" }],
  creator: "BBB Danışmanlık",
  publisher: "BBB Danışmanlık",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "BBB Danışmanlık",
    description:
      "Sağlıkta verimliliği artıran, gelir kayıplarını azaltan danışmanlık çözümleri.",
    url: "https://www.bbbdanismanlik.com.tr",
    siteName: "BBB Danışmanlık",
    images: [
      {
        url: "/logo.png", // public içine logo.png koy
        width: 800,
        height: 600,
        alt: "BBB Danışmanlık Logo",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "BBB Danışmanlık",
    description:
      "SUT analizi, Medula süreçleri ve hastane gelir yönetimi danışmanlığı.",
    images: ["/logo.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}