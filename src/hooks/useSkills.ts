'use client';

import { getSkills } from "@/api/skills.api"
import { useQuery } from "@tanstack/react-query"

export const skillKeys = {
  list: () => ['skills', 'list'] as const,
  detail: (id: string) => ['skills', id] as const,
}

export function useSkills() {
  return useQuery({
    queryKey: skillKeys.list(),
    queryFn: () => getSkills(),
  })
}
