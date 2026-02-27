import { apiRequest } from "@/lib/api";
import { Edu } from "@/mocks/edu";

export async function getEdu(): Promise<Edu[]> {
  const response = await apiRequest<Edu[]>(`/api/edu`);

  return response.data || [];
}
