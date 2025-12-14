'use client';

import { getProject, getProjects } from "@/api/projects.api"
import { useQuery } from "@tanstack/react-query"

export const projectKeys = {
  all: ['projects'] as const,
  list: (page: number, size: number) => ['projects', 'list', { page, size }] as const,
  detail: (id: string) => ['projects', id] as const,
}

interface UseProjectsParams {
  page?: number;
  size?: number;
}

export function useProjects({ page = 0, size = 10 }: UseProjectsParams = {}) {
  return useQuery({
    queryKey: projectKeys.list(page, size),
    queryFn: () => getProjects({ page, size }),
  })
}

export function useProject(id: string) {
  return useQuery({
    queryKey: projectKeys.detail(id),
    queryFn: () => getProject(id),
    enabled: !!id,
  })
}