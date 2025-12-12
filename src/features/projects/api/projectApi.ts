import type {
  ProjectCreateRequest,
  ProjectUpdateRequest,
} from '../types/projectTypes';
import type { ApiResponse } from '@/types/api';
import type { ProjectResponse } from '../types/projectTypes';
import { axiosInstance } from '@/utils/axios';

export const createProject = async (
  request: ProjectCreateRequest,
): Promise<ProjectResponse> => {
  const { data } = await axiosInstance.post<ApiResponse<ProjectResponse>>(
    '/v1/project',
    request,
  );
  return data.data;
};

export const getProjects = async (): Promise<ProjectResponse[]> => {
  const { data } =
    await axiosInstance.get<ApiResponse<ProjectResponse[]>>('/v1/project');
  return data.data;
};

export const getProject = async (id: number): Promise<ProjectResponse> => {
  const { data } = await axiosInstance.get<ApiResponse<ProjectResponse>>(
    `/v1/project/${id}`,
  );
  return data.data;
};

export const updateProject = async (
  id: number,
  request: ProjectUpdateRequest,
): Promise<ProjectResponse> => {
  const { data } = await axiosInstance.put<ApiResponse<ProjectResponse>>(
    `/v1/project/${id}`,
    request,
  );
  return data.data;
};

export const deleteProject = async (id: number): Promise<void> => {
  await axiosInstance.delete(`/projects/${id}`);
};
