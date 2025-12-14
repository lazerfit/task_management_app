import { http, HttpResponse } from 'msw';
import type { ProjectResponse } from '@/features/projects/types/projectTypes';
import { apiResponse, baseUrl } from './commonHandler';

const projectResponse: ProjectResponse = {
  id: 1,
  name: 'test_project',
  createdAt: '2026-01-02T00:00:00',
  status: 'TODO',
};

const projectsResponse: ProjectResponse[] = [
  projectResponse,
  {
    id: 2,
    name: 'test_project2',
    createdAt: '2026-01-02T00:00:00',
    status: 'TODO',
  },
];

export const projectHandlers = [
  http.get(`${baseUrl}/v1/project/1`, () => {
    return HttpResponse.json(apiResponse<ProjectResponse>(projectResponse));
  }),
  http.get(`${baseUrl}/v1/project`, () => {
    return HttpResponse.json(apiResponse<ProjectResponse[]>(projectsResponse));
  }),
  http.post(`${baseUrl}/v1/project`, () => {
    return new HttpResponse(null, { status: 201 });
  }),
];
