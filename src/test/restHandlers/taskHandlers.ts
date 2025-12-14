import { http, HttpResponse } from 'msw';
import { baseUrl } from './commonHandler';

const taskResponse = {
  id: 1,
  name: 'test_task',
  status: 'TODO',
  priority: 'LOW',
  dueDate: '2026-01-03T00:00:00',
};

export const taskHandlers = [
  http.get(`${baseUrl}/v1/task/1`, () => {
    HttpResponse.json(taskResponse);
  }),
];
