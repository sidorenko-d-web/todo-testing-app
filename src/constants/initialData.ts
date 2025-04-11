import { ITask } from '../types';

export const initialTasks: ITask[] = [
  { name: 'Example high task', date: Date.now(), priority: 'high', id: Date.now(), isComplete: false },
  {
    name: 'Example medium task',
    date: Date.now() - 1000 * 60 * 60 * 24,
    priority: 'medium',
    id: Date.now() + 1,
    isComplete: false,
  },
  { name: 'Example low task', date: Date.now(), priority: 'low', id: Date.now() + 2, isComplete: true },
];
