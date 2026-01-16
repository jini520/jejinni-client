"use client";

import { getEdu } from "@/api/edu.api";
import { useQuery } from "@tanstack/react-query";

export const eduKeys = {
  list: () => ["edu", "list"] as const,
};

export function useEdu() {
  return useQuery({
    queryKey: eduKeys.list(),
    queryFn: () => getEdu(),
  });
}
