export type Status = 'TODO' | 'IN_PROGRESS' | 'COMPLETE' | 'CANCLED';

export interface ProjectCreateRequest {
  name: string;
}

export interface ProjectResponse {
  id: number;
  name: string;
  createAt: Date;
}

export interface ProjectUpdateRequest {
  name: string;
}
