import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IdeaForge — 30分で、思いつきを事業計画に。",
  description:
    "AIが市場分析・実現可能性・収益モデルを自動生成。生のアイデアを、投資家や企業が評価できる「アイデアパッケージ」に変換します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
