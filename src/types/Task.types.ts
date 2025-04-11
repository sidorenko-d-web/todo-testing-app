export type TypeTaskPriority = 'high' | 'medium' | 'low';

export interface ITask {
  name: string;
  date: number;
  priority: TypeTaskPriority;
  id: number;
  isComplete: boolean
}
