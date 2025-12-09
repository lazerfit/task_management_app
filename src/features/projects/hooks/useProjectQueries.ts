import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import type {
  ProjectCreateRequest,
  ProjectResponse,
} from '../types/projectTypes';
import {
  createProject,
  deleteProject,
  getProject,
  updateProject as updateProjectApi,
} from '../api/projectApi'; // updateProject as updateProjectApi
import type { ProjectUpdateRequest } from '../types/projectTypes';

export const useCreateProject = () => {
  const queryClient = useQueryClient();
  return useMutation<ProjectResponse, Error, ProjectCreateRequest>({
    mutationFn: (data: ProjectCreateRequest) => createProject(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
    },
  });
};

export const useGetProject = (id: number) => {
  const { data, isPending, error } = useQuery({
    queryKey: ['project', id],
    queryFn: () => getProject(id),
    enabled: !!id && id > 0,
  });
  return { data, isPending, error };
};

export const useUpdateProject = () => {
  const queryClient = useQueryClient();
  return useMutation<
    ProjectResponse,
    Error,
    { id: number; request: ProjectUpdateRequest }
  >({
    mutationFn: ({ id, request }) => updateProjectApi(id, request),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['project', variables.id] });
      queryClient.invalidateQueries({ queryKey: ['projects'] });
    },
  });
};

export const useDeleteProject = () => {
  const queryClient = useQueryClient();
  return useMutation<void, Error, { id: number }>({
    mutationFn: ({ id }) => deleteProject(id),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      queryClient.invalidateQueries({ queryKey: ['project', variables.id] });
    },
  });
};
