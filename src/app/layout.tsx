import type { Metadata } from "next";
import localFont from "next/font/local";
import MSWProvider from "./_components/MSWProvider";
import QueryProvider from "./_providers/QueryProvider";
import "../styles/main.scss";
import "./layout.scss";
import MediaQueryProvider from "./_providers/MediaQueryProvider";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.ttf",
  variable: "--font-pretendard",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "제진명 | 포트폴리오",
  description: "제진명의 포트폴리오 사이트",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${pretendard.variable} antialiased flex`}>
        <QueryProvider>
          <MediaQueryProvider>
            <MSWProvider>
              <div className="layout">{children}</div>
              {modal}
            </MSWProvider>
          </MediaQueryProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
