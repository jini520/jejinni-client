"use client";

import { useEffect, useState } from "react";

interface MSWProviderProps {
  children: React.ReactNode;
}

export default function MSWProvider({ children }: MSWProviderProps) {
  // 서버/클라이언트 모두 false로 시작하여 hydration mismatch 방지
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const init = async () => {
      // 개발 환경이고 MSW 사용이 활성화된 경우에만 MSW 시작
      if (
        process.env.NODE_ENV === "development" &&
        process.env.NEXT_PUBLIC_USE_MSW === "true"
      ) {
        const { worker } = await import("../../mocks/browser");
        await worker.start({
          onUnhandledRequest: "bypass",
        });
      }
      setIsReady(true);
    };

    init();
  }, []);

  // 클라이언트 마운트 전까지 로딩 표시
  if (!isReady) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">초기화 중...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
