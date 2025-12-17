export type ProjectStatus = '' | 'TODO' | 'IN_PROGRESS' | 'DONE';

export interface ProjectCreateRequest {
  name: string;
  status?: ProjectStatus;
}

export interface ProjectResponse {
  id: number;
  name: string;
  createdAt: string;
  status: ProjectStatus;
}

export interface ProjectUpdateRequest {
  name: string;
  status: ProjectStatus;
}
