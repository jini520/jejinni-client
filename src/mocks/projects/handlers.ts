import { http, HttpResponse } from 'msw';
import { mockProjects } from './data';

export const projectHandlers = [
  // 프로젝트 목록 조회
  http.get('/api/projects', () => {
    return HttpResponse.json({
      success: true,
      data: mockProjects,
    });
  }),

  // 프로젝트 단일 조회
  http.get('/api/projects/:id', ({ params }) => {
    const { id } = params;
    const project = mockProjects.find((p) => p.id === id);

    if (!project) {
      return HttpResponse.json(
        { success: false, message: '프로젝트를 찾을 수 없습니다.' },
        { status: 404 }
      );
    }

    return HttpResponse.json({
      success: true,
      data: project,
    });
  }),
];

