"use client";

import { getCertifications } from "@/api/certifications.api";
import { useQuery } from "@tanstack/react-query";

export const certificationKeys = {
  list: () => ["certifications", "list"] as const,
};

export function useCertifications() {
  return useQuery({
    queryKey: certificationKeys.list(),
    queryFn: () => getCertifications(),
  });
}
