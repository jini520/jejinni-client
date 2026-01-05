import { apiRequest } from "@/lib/api";
import { Certifications } from "@/mocks/certifiactions/types";

export async function getCertifications(): Promise<Certifications> {
  const response = await apiRequest<Certifications>(`/api/certifications`);

  return (
    response.data || {
      certifications: [],
      awards: [],
    }
  );
}
