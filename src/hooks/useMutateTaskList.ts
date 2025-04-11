import { useTasksState } from '../store';
import { ITask } from '../types';

export const useMutateTaskList = () => {
  const { setTaskList, taskList } = useTasksState();

  const createNewTask = ({ name, priority, date, id }: Partial<ITask>) => {
    const newTask: ITask = {
      name: name ?? '',
      priority: priority ?? 'high',
      date: date ?? Date.now(),
      id: id ?? Date.now(),
      isComplete: false
    };
    setTaskList([newTask, ...taskList]);
  };
  const deleteTask = ({ id }: { id: number }) => {
    setTaskList([...taskList].filter(item => item.id !== id));
  };
  
  const editTask = (item : ITask) => {
    const listWithoutItem = [...taskList].filter(_item => _item.id !== item.id)
    
    setTaskList([...listWithoutItem, item]);
  };

  const completeTask = (id: number) => {
    const item = taskList.find(item => item.id === id)
    const listWithoutItem = [...taskList].filter(item => item.id !== id)
    console.log(taskList)
    setTaskList([{ ...item as ITask, isComplete: true}, ...listWithoutItem])

  }

  return { createNewTask, deleteTask, editTask , completeTask};
};
