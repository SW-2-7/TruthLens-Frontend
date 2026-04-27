import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const pretendard = localFont({
  src: '../../public/fonts/subset-PretendardVariable.woff2',
  variable: '--font-pretendard',
  display: 'swap',
});


export const metadata: Metadata = {
  title: "TruthLens",
  description: "AI 기반 이미지 진위 분석 서비스. 딥페이크와 이미지 조작 여부를 정밀하게 분석합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={pretendard.variable}>
        {children}
      </body>
    </html>
  );
}
