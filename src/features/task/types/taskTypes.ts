export type Status = 'TODO' | 'IN_PROGRESS' | 'COMPLETE' | 'CANCLED';
export type Priority = 'HIGH' | 'MEDIUM' | 'LOW';

export interface TaskResponse {
  id: number;
  name: string;
  status: Status;
  priority: Priority;
  dueDate: Date;
}

export interface TaskUpdateRequest {
  name: string;
  priority: Priority;
  dueDate: Date;
  status: Status;
}

export interface TaskCreateRequest extends TaskUpdateRequest {
  projectId: number;
}
