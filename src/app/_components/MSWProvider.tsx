"use client";

import { useEffect, useState } from "react";

interface MSWProviderProps {
  children: React.ReactNode;
}

export default function MSWProvider({ children }: MSWProviderProps) {
  const [mswReady, setMswReady] = useState(false);

  useEffect(() => {
    const initMSW = async () => {
      if (typeof window !== "undefined") {
        // 개발 환경에서만 MSW 활성화
        if (process.env.NODE_ENV === "development") {
          const { worker } = await import("../../mocks/browser");
          await worker.start({
            onUnhandledRequest: "bypass", // 처리되지 않은 요청은 그대로 통과
          });
        }
        setMswReady(true);
      }
    };

    initMSW();
  }, []);

  // MSW가 준비되기 전까지는 로딩 표시
  if (!mswReady) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">MSW 초기화 중...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
