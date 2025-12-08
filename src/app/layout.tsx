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
  description: "sw",
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
