import type { Metadata } from "next";
import localFont from "next/font/local";
import { MSWProvider } from "./_components/MSWProvider";
import MediaQueryProvider from "./_providers/MediaQueryProvider";
import "../styles/main.scss";
import "./layout.scss";

if (
  process.env.NEXT_RUNTIME === "nodejs" &&
  process.env.NODE_ENV !== "production" &&
  process.env.NEXT_PUBLIC_USE_MSW === "true"
) {
  const { server } = await import("@/mocks/server");
  server.listen();
}

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
        <MSWProvider>
          <MediaQueryProvider>
            <div className="layout">{children}</div>
            {modal}
          </MediaQueryProvider>
        </MSWProvider>
      </body>
    </html>
  );
}
