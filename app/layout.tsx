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
  title: CLINIC.nameKo,
  description: "믿을 수 있는 진료, 편안한 치과.",
  icons: {
    icon: "/favicon.svg",
  },
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
      <body className="min-h-full flex flex-col">
        <a
          href="#main"
          className="
            sr-only
            focus:not-sr-only
            focus:fixed
            focus:top-4
            focus:left-1/2
            focus:-translate-x-1/2
            focus:z-[100]
            focus:bg-brand-primary-dark
            focus:text-white
            focus:px-5
            focus:py-3
            focus:rounded-lg
            focus:shadow-lg
            focus:text-sm
            focus:font-medium
            focus:outline-none
            focus:ring-2
            focus:ring-brand-accent
            focus:ring-offset-2
          "
        >
          메인 콘텐츠로 건너뛰기
        </a>
        {children}
      </body>
    </html>
  );
}
