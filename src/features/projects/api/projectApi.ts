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
    '/api/projects',
    request,
  );
  return data.data;
};

export const getProject = async (id: number): Promise<ProjectResponse> => {
  const { data } = await axiosInstance.get<ApiResponse<ProjectResponse>>(
    `/api/projects/${id}`,
  );
  return data.data;
};

export const updateProject = async (
  id: number,
  request: ProjectUpdateRequest,
): Promise<ProjectResponse> => {
  const { data } = await axiosInstance.put<ApiResponse<ProjectResponse>>(
    `/api/projects/${id}`,
    request,
  );
  return data.data;
};

export const deleteProject = async (id: number): Promise<void> => {
  await axiosInstance.delete(`/api/projects/${id}`);
};
