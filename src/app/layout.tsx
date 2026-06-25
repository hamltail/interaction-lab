import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Interaction Lab",
  description:
    "UI/UXデザインやアニメーション、CMS連携、Web技術を試すための実験・研究用プロジェクト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={geist.className}>
        {children}
      </body>
    </html>
  );
}
