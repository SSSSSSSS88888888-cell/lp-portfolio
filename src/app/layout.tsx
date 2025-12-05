import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/noto-sans-jp/400.css";
import "@fontsource/noto-sans-jp/500.css";
import "@fontsource/noto-sans-jp/700.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://lp-portfolio.vercel.app"
  ),
  title: {
    default: "LP Portfolio - ランディングページ制作実績",
    template: "%s | LP Portfolio",
  },
  description:
    "Next.js、Tailwind CSS、Framer Motionを使用したランディングページのポートフォリオサイト。SaaS、美容院、コンサルティングなど様々な業種のLP制作実績を掲載。",
  keywords: ["LP制作", "ランディングページ", "Next.js", "Tailwind CSS", "ポートフォリオ"],
  authors: [{ name: "LP Portfolio" }],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "LP Portfolio",
    title: "LP Portfolio - ランディングページ制作実績",
    description:
      "Next.js、Tailwind CSS、Framer Motionを使用したLP制作ポートフォリオ",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LP Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LP Portfolio - ランディングページ制作実績",
    description:
      "Next.js、Tailwind CSS、Framer Motionを使用したLP制作ポートフォリオ",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
