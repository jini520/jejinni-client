"use client";

import { useEffect, useState } from "react";

interface MSWProviderProps {
  children: React.ReactNode;
}

const shouldUseMSW =
  process.env.NODE_ENV === "development" &&
  process.env.NEXT_PUBLIC_USE_MSW === "true";

export default function MSWProvider({ children }: MSWProviderProps) {
  // MSW 미사용 시 바로 children 렌더 (prod에서 스피너 방지)
  const [isReady, setIsReady] = useState(!shouldUseMSW);

  useEffect(() => {
    if (!shouldUseMSW) return;

    const init = async () => {
      const { worker } = await import("../../mocks/browser");
      await worker.start({
        onUnhandledRequest: "bypass",
      });
      setIsReady(true);
    };
    init();
  }, []);

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
