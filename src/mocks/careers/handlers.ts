import { http, HttpResponse } from 'msw';
import { mockCareers } from './data';

export const careerHandlers = [
  // 프로젝트 목록 조회 (페이지네이션)
  http.get('/api/careers', ({ request }) => {
    const url = new URL(request.url);


    return HttpResponse.json({
      success: true,
      data: {
        businesses: mockCareers.businesses,
        projects: mockCareers.projects,
      },
    });
  }),
];

