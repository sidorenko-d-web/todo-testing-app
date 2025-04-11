import { useEffect, useState } from 'react';
import styles from './Modal.module.scss';
import { Button } from '../Button';
import { useModalState, useTasksState } from '../../../store';
import { useMutateTaskList } from '../../../hooks/useMutateTaskList';
import { ITask, TypeTaskPriority } from '../../../types';

export const Modal = () => {
  const { isOpened, mode, toggleModal, editId } = useModalState();
  const { taskList } = useTasksState();

  const [inputValue, setInputValue] = useState('');
  const [priorityValue, setPriorityValue] = useState<TypeTaskPriority>('high');

  const { createNewTask, editTask } = useMutateTaskList();

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

  useEffect(() => {
    const itemToEdit = taskList.find(item => item.id === editId);
    if (itemToEdit) {
      setInputValue(itemToEdit?.name);
      setPriorityValue(itemToEdit?.priority);
    }
  }, [editId]);

  return (
    isOpened && (
      <div className={styles.bg}>
        <div className={styles.wrapper}>
          <h2>{mode === 'create' ? 'Create new task' : 'Change task'}</h2>
          <input placeholder="some value" value={inputValue} onChange={e => setInputValue(e.target.value)} />

          <select value={priorityValue} onChange={e => setPriorityValue(e.target.value as TypeTaskPriority)}>
            <option value={'high'}>high</option>
            <option value={'medium'}>medium</option>
            <option value={'low'}>low</option>
          </select>
          <div className={styles.buttons}>
            <Button onClick={handleConfirm}>confirm</Button>
            <Button onClick={() => toggleModal()} variant="secondary">
              close
            </Button>
          </div>
        </div>
      </div>
    )
  );
};
