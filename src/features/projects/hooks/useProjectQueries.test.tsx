import { renderHook, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
  useCreateProject,
  useGetProject,
  useUpdateProject,
  useDeleteProject,
} from './useProjectQueries';
import * as projectApi from '../api/projectApi';
import type { ProjectResponse } from '../types/projectTypes';
import { queryWrapper } from '@/test/queryWrapper';

// Mock API functions
vi.mock('../api/projectApi');

describe('useProjectQueries', () => {
  const mockProject: ProjectResponse = {
    id: 1,
    name: 'Test Project',
    createAt: new Date(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('useCreateProject', () => {
    it('calls createProject API and invalidates queries on success', async () => {
      const createProjectSpy = vi.spyOn(projectApi, 'createProject');
      createProjectSpy.mockResolvedValue(mockProject);

      const { result } = renderHook(() => useCreateProject(), {
        wrapper: queryWrapper(),
      });

      await result.current.mutateAsync({ name: 'New Project' });

      await waitFor(() => expect(result.current.isSuccess).toBe(true));
      expect(createProjectSpy).toHaveBeenCalledWith({
        name: 'New Project',
        status: 'TODO',
      });
    });
  });

  describe('useGetProject', () => {
    it('fetches project data', async () => {
      const getProjectSpy = vi.spyOn(projectApi, 'getProject');
      getProjectSpy.mockResolvedValue(mockProject);

      const { result } = renderHook(() => useGetProject(1), {
        wrapper: queryWrapper(),
      });

      await waitFor(() => expect(result.current.data).toEqual(mockProject));
      expect(getProjectSpy).toHaveBeenCalledWith(1);
    });

    it('does not fetch if id is invalid', () => {
      const getProjectSpy = vi.spyOn(projectApi, 'getProject');

      const { result } = renderHook(() => useGetProject(0), {
        wrapper: queryWrapper(),
      });

      expect(result.current.isPending).toBe(true);
      expect(getProjectSpy).not.toHaveBeenCalled();
    });
  });

  describe('useUpdateProject', () => {
    it('calls updateProject API and invalidates queries on success', async () => {
      const updatedProject = { ...mockProject, name: 'Updated' };
      const updateProjectSpy = vi.spyOn(projectApi, 'updateProject');
      updateProjectSpy.mockResolvedValue(updatedProject);

      const { result } = renderHook(() => useUpdateProject(), {
        wrapper: queryWrapper(),
      });

      await result.current.mutateAsync({
        id: 1,
        request: { name: 'Updated' },
      });

      await waitFor(() => expect(result.current.isSuccess).toBe(true));
      expect(updateProjectSpy).toHaveBeenCalledWith(1, {
        name: 'Updated',
        status: 'IN_PROGRESS',
      });
    });
  });

  describe('useDeleteProject', () => {
    it('calls deleteProject API and invalidates queries on success', async () => {
      const deleteProjectSpy = vi.spyOn(projectApi, 'deleteProject');
      deleteProjectSpy.mockResolvedValue(undefined);

      const { result } = renderHook(() => useDeleteProject(), {
        wrapper: queryWrapper(),
      });

      await result.current.mutateAsync({ id: 1 });

      await waitFor(() => expect(result.current.isSuccess).toBe(true));
      expect(deleteProjectSpy).toHaveBeenCalledWith(1);
    });
  });
});
