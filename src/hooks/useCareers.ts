'use client';

import { getCareers } from "@/api/careers.api"
import { useQuery } from "@tanstack/react-query"

export const careerKeys = {
  list: () => ['careers', 'list'] as const,
}

export function useCareers() {
  return useQuery({
    queryKey: careerKeys.list(),
    queryFn: () => getCareers(),
  })
}
