import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "Puerta de Bisagra | 比萨格拉门 - 西班牙托莱多古城最宏伟的城门",
  description: "Puerta de Bisagra（比萨格拉门/新比萨格拉门）是西班牙托莱多古城最宏伟、最具标志性的城门。了解其摩尔人起源、文艺复兴重建历史、查理五世徽章及三文化之城象征意义。",
  keywords: ["Puerta de Bisagra", "比萨格拉门", "托莱多城门", "Toledo City Gate", "摩尔人起源", "Moorish Origin", "查理五世徽章", "中世纪城墙", "三文化之城", "Alonso de Covarrubias"],
  authors: [{ name: "Puerta de Bisagra" }],
  openGraph: {
    title: "Puerta de Bisagra | 比萨格拉门",
    description: "西班牙托莱多古城最宏伟的城门 - 三文化之城象征",
    url: "https://www.puertadebisagra.com/",
    siteName: "Puerta de Bisagra",
    locale: "zh_TW",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9279583389810634" crossOrigin="anonymous"></script>
        <meta name="google-adsense-account" content="ca-pub-9279583389810634" />
        <link rel="canonical" href="https://www.puertadebisagra.com/" />
        <link rel="alternate" hrefLang="en" href="https://www.puertadebisagra.com/en/" />
        <link rel="alternate" hrefLang="zh" href="https://www.puertadebisagra.com/zh/" />
        <link rel="alternate" hrefLang="fr" href="https://www.puertadebisagra.com/fr/" />
        <link rel="alternate" hrefLang="it" href="https://www.puertadebisagra.com/it/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.puertadebisagra.com/" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
