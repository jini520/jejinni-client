import { http, HttpResponse } from 'msw';

// API 타입 정의
interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
}

interface Folder {
  id: number;
  name: string;
  color: string;
  icon?: string;
  createdAt: string;
  updatedAt: string;
}

// Mock 데이터
const mockUsers: User[] = [
  {
    id: 1,
    name: '홍길동',
    email: 'hong@example.com',
    avatar: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    name: '김철수',
    email: 'kim@example.com',
    avatar: 'https://via.placeholder.com/150'
  }
];

const mockFolders: Folder[] = [
  {
    id: 1,
    name: '작업',
    color: '#FF3B30',
    icon: 'folder',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: 2,
    name: '개인',
    color: '#007AFF',
    icon: 'folder',
    createdAt: '2024-01-02T00:00:00Z',
    updatedAt: '2024-01-02T00:00:00Z'
  }
];

// API 핸들러 정의
export const handlers = [
  // 사용자 관련 API
  http.get('/api/users', () => {
    return HttpResponse.json({
      success: true,
      data: mockUsers
    });
  }),

  http.get('/api/users/:id', ({ params }) => {
    const { id } = params;
    const user = mockUsers.find(u => u.id === Number(id));
    
    if (!user) {
      return HttpResponse.json(
        { success: false, message: '사용자를 찾을 수 없습니다.' },
        { status: 404 }
      );
    }

    return HttpResponse.json({
      success: true,
      data: user
    });
  }),

  // 폴더 관련 API
  http.get('/api/folders', () => {
    return HttpResponse.json({
      success: true,
      data: mockFolders
    });
  }),

  http.post('/api/folders', async ({ request }) => {
    const newFolder = await request.json() as Omit<Folder, 'id' | 'createdAt' | 'updatedAt'>;
    
    const folder: Folder = {
      ...newFolder,
      id: mockFolders.length + 1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    mockFolders.push(folder);

    return HttpResponse.json({
      success: true,
      data: folder
    }, { status: 201 });
  }),

  http.put('/api/folders/:id', async ({ params, request }) => {
    const { id } = params;
    const updates = await request.json() as Partial<Folder>;
    
    const folderIndex = mockFolders.findIndex(f => f.id === Number(id));
    
    if (folderIndex === -1) {
      return HttpResponse.json(
        { success: false, message: '폴더를 찾을 수 없습니다.' },
        { status: 404 }
      );
    }

    mockFolders[folderIndex] = {
      ...mockFolders[folderIndex],
      ...updates,
      updatedAt: new Date().toISOString()
    };

    return HttpResponse.json({
      success: true,
      data: mockFolders[folderIndex]
    });
  }),

  http.delete('/api/folders/:id', ({ params }) => {
    const { id } = params;
    const folderIndex = mockFolders.findIndex(f => f.id === Number(id));
    
    if (folderIndex === -1) {
      return HttpResponse.json(
        { success: false, message: '폴더를 찾을 수 없습니다.' },
        { status: 404 }
      );
    }

    mockFolders.splice(folderIndex, 1);

    return HttpResponse.json({
      success: true,
      message: '폴더가 삭제되었습니다.'
    });
  }),

  // 상태바 관련 API
  http.get('/api/status', () => {
    return HttpResponse.json({
      success: true,
      data: {
        time: new Date().toISOString(),
        battery: 85,
        wifi: true,
        bluetooth: false
      }
    });
  })
];
