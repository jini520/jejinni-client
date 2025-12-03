import { apiRequest } from "@/lib/api";
import { Project } from "@/mocks/projects";

export async function getProjects(): Promise<Project[]> {
  const response = await apiRequest<Project[]>('/api/projects');

  return response.data || [];
}

export async function getProject(id: string): Promise<Project | undefined> {
  const response = await apiRequest<Project>(`/api/projects/${id}`);

  return response.data;
}