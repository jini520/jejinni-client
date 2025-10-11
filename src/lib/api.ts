// import { ApiResponse, Folder, CreateFolderRequest, UpdateFolderRequest } from '@/app/_api/api';

// // API 기본 설정
// const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

// // 공통 fetch 함수
// async function apiRequest<T>(
//   endpoint: string,
//   options: RequestInit = {}
// ): Promise<ApiResponse<T>> {
//   const url = `${API_BASE_URL}${endpoint}`;
  
//   const config: RequestInit = {
//     headers: {
//       'Content-Type': 'application/json',
//       ...options.headers,
//     },
//     ...options,
//   };

//   try {
//     const response = await fetch(url, config);
//     const data = await response.json();
    
//     if (!response.ok) {
//       throw new Error(data.message || 'API 요청에 실패했습니다.');
//     }
    
//     return data;
//   } catch (error) {
//     console.error('API Error:', error);
//     throw error;
//   }
// }
