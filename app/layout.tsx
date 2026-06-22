import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://shimanagashi-kitashinchi.vercel.app";
const title = "深夜食堂 しまながし 北新地 グルメ居酒屋 | 北新地・堂島の和食店";
const description =
  "深夜食堂 しまながし 北新地 グルメ居酒屋は、大阪市北区堂島の和食店です。住所、電話番号、営業時間、公式サイト、予約方法、Googleマップリンク、FAQ、English Guideを掲載しています。";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "深夜食堂 しまながし 北新地 グルメ居酒屋",
    locale: "ja_JP",
    type: "website"
  },
  twitter: {
    card: "summary",
    title,
    description
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
