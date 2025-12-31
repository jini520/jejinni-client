# Client Frontend (Next.js) 개발용 Dockerfile - main 브랜치 사용
FROM node:20-alpine

# Git 설치 (브랜치 체크아웃용)
RUN apk add --no-cache git

WORKDIR /app

# Git 저장소에서 main 브랜치 체크아웃
ARG GIT_BRANCH=main

# package.json과 pnpm-lock.yaml 먼저 복사 (의존성 캐시 활용)
COPY package.json pnpm-lock.yaml* ./

# pnpm 설치 및 의존성 설치
RUN corepack enable && corepack prepare pnpm@latest --activate
RUN pnpm install

# 소스 코드 복사 및 main 브랜치 체크아웃
COPY . .
RUN git checkout ${GIT_BRANCH} || echo "Branch ${GIT_BRANCH} already checked out or not a git repo"

# 포트 노출
EXPOSE 3000

# 개발 서버 실행
CMD ["pnpm", "start"]

