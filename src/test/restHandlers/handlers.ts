import { projectHandlers } from './projectHandlers';
import { taskHandlers } from './taskHandlers';
import { preflightHandler } from './commonHandler';

export const restHandlers = [
  ...projectHandlers,
  ...taskHandlers,
  ...preflightHandler,
];
