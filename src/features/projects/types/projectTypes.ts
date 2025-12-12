export type Status = 'TODO' | 'IN_PROGRESS' | 'DONE' | 'CANCELED';

export interface ProjectCreateRequest {
  name: string;
  status?: Status;
}

export interface ProjectResponse {
  id: number;
  name: string;
  createAt: Date;
  status: Status;
}

export interface ProjectUpdateRequest {
  name: string;
  status: Status;
}
