export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    if (process.env.NODE_ENV === 'development') {
      // 동적 import로 production 번들에서 제외
      const { server } = await import('./mocks/server');
      server.listen({
        onUnhandledRequest: 'bypass', // 처리되지 않은 요청은 그대로 통과
      });
    }
  }
}