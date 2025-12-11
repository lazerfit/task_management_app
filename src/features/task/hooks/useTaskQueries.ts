import { useQuery } from '@tanstack/react-query';
import { getTask, deleteTask, updateTask, createTask } from '../api/taskApi';
import type {
  TaskCreateRequest,
  TaskResponse,
  TaskUpdateRequest,
} from '../types/taskTypes';
import { useCustomMutation } from '@/hooks/useCustomMutation';

export const useGetTask = (id: number) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['task', id],
    queryFn: () => getTask(id),
    enabled: !!id && id > 0,
  });
  return { data, isLoading, error };
};

export const useDeleteTask = () => {
  return useCustomMutation<void, Error, { id: number }>(
    ({ id }) => deleteTask(id),
    {
      successMessage: '할 일이 삭제되었습니다.',
      invalidateKeys: (_, variables) => [['tasks'], ['task', variables.id]],
    },
  );
};

export const useUpdateTask = () => {
  return useCustomMutation<
    TaskResponse,
    Error,
    { id: number; request: TaskUpdateRequest }
  >(({ id, request }) => updateTask(id, request), {
    successMessage: '할 일이 수정되었습니다.',
    invalidateKeys: (_, variables) => [['tasks'], ['task', variables.id]],
  });
};

export const useCreateTask = () => {
  return useCustomMutation<TaskResponse, Error, { request: TaskCreateRequest }>(
    ({ request }) => createTask(request),
    {
      successMessage: '할 일이 생성되었습니다.',
      invalidateKeys: [['tasks']],
    },
  );
};
