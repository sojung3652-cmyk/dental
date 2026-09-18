import type { Metadata } from "next";
import { Nanum_Pen_Script } from "next/font/google";
import { CLINIC } from "@/data/clinic";
import "./globals.css";

const nanumPenScript = Nanum_Pen_Script({
  variable: "--font-nanum-pen",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: `${CLINIC.nameKo} ${CLINIC.nameEn}`,
  description: `다시 오고 싶어지는 치과, ${CLINIC.nameKo}. (컨셉 디자인 데모)`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={`${nanumPenScript.variable} h-full antialiased`}>
      <head>
        {/* Pretendard Variable isn't on Google Fonts — loaded via jsdelivr CDN per project spec */}
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.css"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
