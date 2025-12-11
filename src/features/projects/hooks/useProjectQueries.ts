import { useQuery } from '@tanstack/react-query';
import type {
  ProjectCreateRequest,
  ProjectResponse,
} from '../types/projectTypes';
import {
  createProject,
  deleteProject,
  getProject,
  updateProject as updateProjectApi,
} from '../api/projectApi';
import type { ProjectUpdateRequest } from '../types/projectTypes';
import { useCustomMutation } from '@/hooks/useCustomMutation';

export const useCreateProject = () => {
  return useCustomMutation<ProjectResponse, Error, ProjectCreateRequest>(
    createProject,
    {
      successMessage: '프로젝트가 생성되었습니다.',
      invalidateKeys: [['projects']],
    },
  );
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
  return useCustomMutation<
    ProjectResponse,
    Error,
    { id: number; request: ProjectUpdateRequest }
  >(({ id, request }) => updateProjectApi(id, request), {
    successMessage: '프로젝트가 수정되었습니다.',
    invalidateKeys: (_, variables) => [['project', variables.id], ['projects']],
  });
};

export const useDeleteProject = () => {
  return useCustomMutation<void, Error, { id: number }>(
    ({ id }) => deleteProject(id),
    {
      successMessage: '프로젝트가 삭제되었습니다.',
      invalidateKeys: (_, variables) => [
        ['projects'],
        ['project', variables.id],
      ],
    },
  );
};
