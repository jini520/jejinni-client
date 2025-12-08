import type { Project } from './types';

export const mockProjects: Project[] = [
  {
    id: "1",
    title: '포트폴리오 웹사이트',
    description: 'Next.js와 TypeScript로 만든 개인 포트폴리오 사이트입니다.',
    skills: ['react', 'nextjs', 'typescript'],
  },
  {
    id: "2",
    title: '할 일 관리 앱',
    description: 'React와 Zustand를 활용한 투두리스트 애플리케이션입니다.',
    skills: ['react', 'zustand', 'typescript'],
  },
  {
    id: "3",
    title: 'E-commerce 플랫폼',
    description: '풀스택 쇼핑몰 프로젝트로 결제 시스템을 구현했습니다.',
    skills: ['react', 'nextjs', 'typescript', 'zustand', 'tailwind'],
  },
];

