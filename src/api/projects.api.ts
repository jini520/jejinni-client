import { apiRequest } from "@/lib/api";
import { Project, ProjectDetail } from "@/mocks/projects";

export async function getProjects(): Promise<Project[]> {
  const response = await apiRequest<Project[]>('/api/projects');

  return response.data || [];
}

export async function getProject(id: string): Promise<ProjectDetail | undefined> {
  const response = await apiRequest<ProjectDetail>(`/api/projects/${id}`);

  console.log(response.data);
  return response.data;
}