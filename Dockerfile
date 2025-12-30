# Client Frontend (Next.js) 개발용 Dockerfile
FROM node:20-alpine

WORKDIR /app

# package.json 복사 (의존성 캐시 활용)
COPY package.json pnpm-lock.yaml* ./

# pnpm 설치 및 의존성 설치
RUN corepack enable && corepack prepare pnpm@latest --activate
RUN pnpm install

# 소스 코드 복사
COPY . .

# 포트 노출
EXPOSE 3000

# 개발 서버 실행
CMD ["pnpm", "run", "dev"]

