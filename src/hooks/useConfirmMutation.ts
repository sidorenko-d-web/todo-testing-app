import { useModalState, useTasksState } from "../store";
import { ITask, TypeTaskPriority } from "../types";
import { useMutateTaskList } from "./useMutateTaskList";

export const useConfirmMutation = ({inputValue, priorityValue}: {inputValue: string, priorityValue: TypeTaskPriority}) => {
  const { createNewTask, editTask } = useMutateTaskList();
  const { taskList } = useTasksState();
  const { mode, toggleModal, editId } = useModalState();

  const handleCreateNewTask = () => {
    if (inputValue.trim() === '' || !priorityValue) return;
    createNewTask({ name: inputValue, priority: priorityValue });
  };

  const handleUpdateNewTask = () => {
    if (inputValue.trim() === '' || !priorityValue) return;
    const currentTask = taskList.find(item => item.id === editId);
    console.log(currentTask)
    if (!currentTask) return;

    const newTask: ITask = {
      name: inputValue,
      priority: priorityValue,
      date: currentTask.date,
      id: currentTask.id,
      isComplete: currentTask.isComplete,
    };
    editTask(newTask);
    toggleModal()
  };

  const handleConfirm = () => {
    if (mode === 'create') handleCreateNewTask();
    else handleUpdateNewTask();
  };

  return {handleConfirm}
}