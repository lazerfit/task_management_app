import { describe, it, expect, vi, afterEach, type Mock } from 'vitest';
import {
  createProject,
  getProject,
  updateProject,
  deleteProject,
} from './projectApi';
import { axiosInstance } from '@/utils/axios';
import type {
  ProjectCreateRequest,
  ProjectUpdateRequest,
  ProjectResponse,
} from '../types/projectTypes';

// Mock axiosInstance
vi.mock('@/utils/axios', () => ({
  axiosInstance: {
    get: vi.fn(),
    post: vi.fn(),
    put: vi.fn(),
    delete: vi.fn(),
  },
}));

describe('projectApi', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  const mockProjectResponse: ProjectResponse = {
    id: 1,
    name: 'Test Project',
    createAt: new Date(),
  };

  it('createProject calls axios.post with correct arguments', async () => {
    const request: ProjectCreateRequest = {
      name: 'Test Project',
    };
    (axiosInstance.post as Mock).mockResolvedValue({
      data: { data: mockProjectResponse },
    });

    const result = await createProject(request);

    expect(axiosInstance.post).toHaveBeenCalledWith('/api/projects', request);
    expect(result).toEqual(mockProjectResponse);
  });

  it('getProject calls axios.get with correct arguments', async () => {
    const projectId = 1;
    (axiosInstance.get as Mock).mockResolvedValue({
      data: { data: mockProjectResponse },
    });

    const result = await getProject(projectId);

    expect(axiosInstance.get).toHaveBeenCalledWith(
      `/api/projects/${projectId}`,
    );
    expect(result).toEqual(mockProjectResponse);
  });

  it('updateProject calls axios.put with correct arguments', async () => {
    const projectId = 1;
    const request: ProjectUpdateRequest = {
      name: 'Updated Project',
    };
    const updatedResponse = { ...mockProjectResponse, ...request };

    (axiosInstance.put as Mock).mockResolvedValue({
      data: { data: updatedResponse },
    });

    const result = await updateProject(projectId, request);

    expect(axiosInstance.put).toHaveBeenCalledWith(
      `/api/projects/${projectId}`,
      request,
    );
    expect(result).toEqual(updatedResponse);
  });

  it('deleteProject calls axios.delete with correct arguments', async () => {
    const projectId = 1;
    (axiosInstance.delete as Mock).mockResolvedValue({});

    await deleteProject(projectId);

    expect(axiosInstance.delete).toHaveBeenCalledWith(
      `/api/projects/${projectId}`,
    );
  });
});
