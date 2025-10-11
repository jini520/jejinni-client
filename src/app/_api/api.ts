// API 응답 공통 타입
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

// 폴더 관련 타입
export interface Folder {
  id: number;
  name: string;
  color: string;
  icon?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateFolderRequest {
  name: string;
  color: string;
  icon?: string;
}

export interface UpdateFolderRequest {
  name?: string;
  color?: string;
  icon?: string;
}

// API 엔드포인트 타입
export type ApiEndpoints = {
  // 폴더
  'GET /api/folders': {
    response: ApiResponse<Folder[]>;
  };
  'POST /api/folders': {
    body: CreateFolderRequest;
    response: ApiResponse<Folder>;
  };
  'PUT /api/folders/:id': {
    params: { id: string };
    body: UpdateFolderRequest;
    response: ApiResponse<Folder>;
  };
  'DELETE /api/folders/:id': {
    params: { id: string };
    response: ApiResponse<{ message: string }>;
  };
};
