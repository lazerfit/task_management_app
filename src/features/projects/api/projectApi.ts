import type {
  ProjectCreateRequest,
  ProjectStatus,
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

export const getProjects = async (
  filter?: ProjectStatus,
): Promise<ProjectResponse[]> => {
  const { data } = await axiosInstance.get<ApiResponse<ProjectResponse[]>>(
    '/v1/project',
    {
      params: {
        filter: filter ? filter : 'ALL',
      },
    },
  );
  return data.data;
};

export const getProject = async (
  id: string | undefined,
): Promise<ProjectResponse> => {
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
