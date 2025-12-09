import type { ApiResponse } from '@/types/api';
import { axiosInstance } from '@/utils/axios';
import type {
  TaskCreateRequest,
  TaskResponse,
  TaskUpdateRequest,
} from '../types/taskTypes';

export const getTask = async (id: number) => {
  const { data } = await axiosInstance.get<ApiResponse<TaskResponse>>(
    `/api/task/${id}`,
  );
  return data.data;
};

export const createTask = async (request: TaskCreateRequest) => {
  const { data } = await axiosInstance.post<ApiResponse<TaskResponse>>(
    '/api/task',
    request,
  );
  return data.data;
};

export const updateTask = async (id: number, request: TaskUpdateRequest) => {
  const { data } = await axiosInstance.put<ApiResponse<TaskResponse>>(
    `/api/task/${id}`,
    request,
  );
  return data.data;
};

export const deleteTask = async (id: number) => {
  await axiosInstance.delete(`/api/task/${id}`);
};
