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
  title: "Puerta de Bisagra Toledo",
  description: "Independent travel guide to Puerta de Bisagra in Toledo, with history, visitor information, directions and official reference links.",
  keywords: ["Puerta de Bisagra", "Puerta Nueva de Bisagra", "Puerta de Bisagra Toledo", "Toledo city gate", "Alonso de Covarrubias", "比萨格拉门"],
  authors: [{ name: "Puerta de Bisagra" }],
  openGraph: {
    title: "Puerta de Bisagra Toledo",
    description: "Independent travel guide to one of Toledo's most iconic monumental gates.",
    url: "https://www.puertadebisagra.com/",
    siteName: "Puerta de Bisagra",
    locale: "es",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9279583389810634" crossOrigin="anonymous"></script>
        <meta name="google-adsense-account" content="ca-pub-9279583389810634" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
