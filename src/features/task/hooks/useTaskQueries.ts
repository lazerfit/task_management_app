import { useMutation, useQuery } from '@tanstack/react-query';
import { getTask, deleteTask, updateTask, createTask } from '../api/taskApi';
import { useQueryClient } from '@tanstack/react-query';
import type {
  TaskCreateRequest,
  TaskResponse,
  TaskUpdateRequest,
} from '../types/taskTypes';

export const useGetTask = (id: number) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['task', id],
    queryFn: () => getTask(id),
    enabled: !!id && id > 0,
  });
  return { data, isLoading, error };
};

export const useDeleteTask = () => {
  const queryClient = useQueryClient();
  return useMutation<void, Error, { id: number }>({
    mutationFn: ({ id }) => deleteTask(id),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      queryClient.invalidateQueries({ queryKey: ['task', variables.id] });
    },
  });
};

export const useUpdateTask = () => {
  const queryClient = useQueryClient();
  return useMutation<
    TaskResponse,
    Error,
    { id: number; request: TaskUpdateRequest }
  >({
    mutationFn: ({ id, request }) => updateTask(id, request),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      queryClient.invalidateQueries({ queryKey: ['task', variables.id] });
    },
  });
};

export const useCreateTask = () => {
  const queryClient = useQueryClient();
  return useMutation<TaskResponse, Error, { request: TaskCreateRequest }>({
    mutationFn: ({ request }) => createTask(request),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });
};
