import { Project, ProjectDetail } from './types';

export const mockProjects: Project[] = [
  {
    id: "306a3e3c-5b05-4f28-bb65-b5f12937c210",
    title: '포트폴리오 웹사이트',
    description: 'Next.js와 TypeScript로 만든 개인 포트폴리오 사이트입니다.',
    skills: ['react', 'nextjs', 'typescript'],
  },
  {
    id: "7aa9e0e4-9af5-4f02-8dde-6854cbde994c",
    title: '할 일 관리 앱',
    description: 'React와 Zustand를 활용한 투두리스트 애플리케이션입니다.',
    skills: ['react', 'zustand', 'typescript'],
  },
  {
    id: "ecce22ab-0fa5-46b5-89b2-5e2eb7eff7c3",
    title: 'E-commerce 플랫폼',
    description: '풀스택 쇼핑몰 프로젝트로 결제 시스템을 구현했습니다.',
    skills: ['react', 'nextjs', 'typescript', 'zustand', 'tailwind'],
  },
];

export const mockProjectDetails: ProjectDetail[] = [
  {
    id: "306a3e3c-5b05-4f28-bb65-b5f12937c210",
    title: '포트폴리오 웹사이트',
    description: 'Next.js와 TypeScript로 만든 개인 포트폴리오 사이트입니다.',
    skills: ['react', 'nextjs', 'typescript'],
    participants: 1,
    period: '2024.01. - 2024.12.',
    contents: [
      { id: 'ff412fec-fbe2-41fe-856e-e25f3e501adb', parentId: null, order: 0, content: '포트폴리오 웹사이트는 Next.js와 TypeScript로 만든 개인 포트폴리오 사이트입니다.'},
      { id: '1c467352-eb81-467c-a32c-e568cf31a9c3', parentId: null, order: 1, content: '포트폴리오 웹사이트는 Next.js와 TypeScript로 만든 개인 포트폴리오 사이트입니다.'},
      { id: '2905015a-01e3-487c-8542-b2922b637b1a', parentId: 'ff412fec-fbe2-41fe-856e-e25f3e501adb', order: 0, content: '포트폴리오 웹사이트는 Next.js와 TypeScript로 만든 개인 포트폴리오 사이트입니다.'},
      { id: '5a0bec29-491b-481c-9928-e8d663005923', parentId: 'ff412fec-fbe2-41fe-856e-e25f3e501adb', order: 1, content: '포트폴리오 웹사이트는 Next.js와 TypeScript로 만든 개인 포트폴리오 사이트입니다.'},
      { id: '78e4f2ad-e35d-47c9-bff1-ea6c206c6bd7', parentId: 'ff412fec-fbe2-41fe-856e-e25f3e501adb', order: 2, content: '포트폴리오 웹사이트는 Next.js와 TypeScript로 만든 개인 포트폴리오 사이트입니다.'},
      { id: '45d71279-f566-454d-8010-e5aa867ea6c2', parentId: '1c467352-eb81-467c-a32c-e568cf31a9c3', order: 0, content: '포트폴리오 웹사이트는 Next.js와 TypeScript로 만든 개인 포트폴리오 사이트입니다.'},
      { id: '926a41e6-f2d4-40b3-9a2e-6a7ad7e1b76e', parentId: '1c467352-eb81-467c-a32c-e568cf31a9c3', order: 1, content: '포트폴리오 웹사이트는 Next.js와 TypeScript로 만든 개인 포트폴리오 사이트입니다.'},
      { id: '29a1e73a-0c4d-4d36-9a1b-748db1d45652', parentId: '1c467352-eb81-467c-a32c-e568cf31a9c3', order: 2, content: '포트폴리오 웹사이트는 Next.js와 TypeScript로 만든 개인 포트폴리오 사이트입니다.'},
    ]
  },
  {
    id: "7aa9e0e4-9af5-4f02-8dde-6854cbde994c",
    title: '할 일 관리 앱',
    description: 'React와 Zustand를 활용한 투두리스트 애플리케이션입니다.',
    skills: ['react', 'zustand', 'typescript'],
    participants: 2,
    period: '2024.01. - 2024.12.',
    contents: [
      { id: 'ff412fec-fbe2-41fe-856e-e25f3e501adb', parentId: null, order: 0, content: '포트폴리오 웹사이트는 Next.js와 TypeScript로 만든 개인 포트폴리오 사이트입니다.'},
      { id: '1c467352-eb81-467c-a32c-e568cf31a9c3', parentId: null, order: 0, content: '포트폴리오 웹사이트는 Next.js와 TypeScript로 만든 개인 포트폴리오 사이트입니다.'},
      { id: '2905015a-01e3-487c-8542-b2922b637b1a', parentId: 'ff412fec-fbe2-41fe-856e-e25f3e501adb', order: 2, content: '포트폴리오 웹사이트는 Next.js와 TypeScript로 만든 개인 포트폴리오 사이트입니다.'},
      { id: '5a0bec29-491b-481c-9928-e8d663005923', parentId: 'ff412fec-fbe2-41fe-856e-e25f3e501adb', order: 3, content: '포트폴리오 웹사이트는 Next.js와 TypeScript로 만든 개인 포트폴리오 사이트입니다.'},
      { id: '78e4f2ad-e35d-47c9-bff1-ea6c206c6bd7', parentId: 'ff412fec-fbe2-41fe-856e-e25f3e501adb', order: 4, content: '포트폴리오 웹사이트는 Next.js와 TypeScript로 만든 개인 포트폴리오 사이트입니다.'},
      { id: '45d71279-f566-454d-8010-e5aa867ea6c2', parentId: 'ff412fec-fbe2-41fe-856e-e25f3e501adb', order: 5, content: '포트폴리오 웹사이트는 Next.js와 TypeScript로 만든 개인 포트폴리오 사이트입니다.'},
      { id: '926a41e6-f2d4-40b3-9a2e-6a7ad7e1b76e', parentId: 'ff412fec-fbe2-41fe-856e-e25f3e501adb', order: 6, content: '포트폴리오 웹사이트는 Next.js와 TypeScript로 만든 개인 포트폴리오 사이트입니다.'},
      { id: '29a1e73a-0c4d-4d36-9a1b-748db1d45652', parentId: 'ff412fec-fbe2-41fe-856e-e25f3e501adb', order: 7, content: '포트폴리오 웹사이트는 Next.js와 TypeScript로 만든 개인 포트폴리오 사이트입니다.'},
    ]
  },  
  {
    id: "ecce22ab-0fa5-46b5-89b2-5e2eb7eff7c3",
    title: 'E-commerce 플랫폼',
    description: '풀스택 쇼핑몰 프로젝트로 결제 시스템을 구현했습니다.',
    skills: ['react', 'nextjs', 'typescript', 'zustand', 'tailwind'],
    participants: 3,
    period: '2024.01. - 2024.12.',
    contents: [
      { id: 'ff412fec-fbe2-41fe-856e-e25f3e501adb', parentId: null, order: 0, content: '포트폴리오 웹사이트는 Next.js와 TypeScript로 만든 개인 포트폴리오 사이트입니다.'},
    ]
  },
]