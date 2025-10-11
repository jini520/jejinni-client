'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { ApiResponse, User, Folder, CreateFolderRequest, UpdateFolderRequest, StatusData } from '@/types/api';

// API 기본 설정
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

// 공통 fetch 함수
async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const config: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, config);
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'API 요청에 실패했습니다.');
    }
    
    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

// Query Keys
export const queryKeys = {
  users: ['users'] as const,
  user: (id: number) => ['users', id] as const,
  folders: ['folders'] as const,
  folder: (id: number) => ['folders', id] as const,
  status: ['status'] as const,
};

// 사용자 관련 훅
export function useUsers() {
  return useQuery({
    queryKey: queryKeys.users,
    queryFn: () => apiRequest<User[]>('/api/users'),
    select: (data) => data.data || [],
  });
}

export function useUser(id: number) {
  return useQuery({
    queryKey: queryKeys.user(id),
    queryFn: () => apiRequest<User>(`/api/users/${id}`),
    select: (data) => data.data,
    enabled: !!id,
  });
}

// 폴더 관련 훅
export function useFolders() {
  return useQuery({
    queryKey: queryKeys.folders,
    queryFn: () => apiRequest<Folder[]>('/api/folders'),
    select: (data) => data.data || [],
  });
}

export function useFolder(id: number) {
  return useQuery({
    queryKey: queryKeys.folder(id),
    queryFn: () => apiRequest<Folder>(`/api/folders/${id}`),
    select: (data) => data.data,
    enabled: !!id,
  });
}

// 폴더 뮤테이션 훅
export function useCreateFolder() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: CreateFolderRequest) => 
      apiRequest<Folder>('/api/folders', {
        method: 'POST',
        body: JSON.stringify(data),
      }),
    onSuccess: () => {
      // 폴더 목록 캐시 무효화
      queryClient.invalidateQueries({ queryKey: queryKeys.folders });
    },
  });
}

export function useUpdateFolder() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: UpdateFolderRequest }) =>
      apiRequest<Folder>(`/api/folders/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
      }),
    onSuccess: (_, { id }) => {
      // 폴더 목록과 특정 폴더 캐시 무효화
      queryClient.invalidateQueries({ queryKey: queryKeys.folders });
      queryClient.invalidateQueries({ queryKey: queryKeys.folder(id) });
    },
  });
}

export function useDeleteFolder() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (id: number) =>
      apiRequest<{ message: string }>(`/api/folders/${id}`, {
        method: 'DELETE',
      }),
    onSuccess: () => {
      // 폴더 목록 캐시 무효화
      queryClient.invalidateQueries({ queryKey: queryKeys.folders });
    },
  });
}

// 상태바 관련 훅
export function useStatus() {
  return useQuery({
    queryKey: queryKeys.status,
    queryFn: () => apiRequest<StatusData>('/api/status'),
    select: (data) => data.data,
    refetchInterval: 30000, // 30초마다 자동 리페치
  });
}
