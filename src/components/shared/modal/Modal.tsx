import { useEffect, useState } from 'react';
import styles from './Modal.module.scss';
import { Button } from '../Button';
import { useModalState, useTasksState } from '../../../store';
import { TypeTaskPriority } from '../../../types';
import { useConfirmMutation } from '../../../hooks';

export const Modal = () => {
  const { isOpened, mode, toggleModal, editId } = useModalState();
  const { taskList } = useTasksState();

  const [inputValue, setInputValue] = useState('');
  const [priorityValue, setPriorityValue] = useState<TypeTaskPriority>('high');

  const {handleConfirm} = useConfirmMutation({inputValue, priorityValue})
 
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
