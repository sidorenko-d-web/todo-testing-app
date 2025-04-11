import { create } from 'zustand';
import { ITask } from '../types';
import { initialTasks } from '../constants/initialData';

interface TaskStore {
  taskList: ITask[]
  setTaskList: (list : ITask[]) => void
}

export const useTasksState = create<TaskStore>()((set) => ({
  // Начальное состояние
  taskList: initialTasks,

  // Методы для обновления состояния
 setTaskList: (list) => set({taskList: list})
}));
