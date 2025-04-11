import { FC, memo } from 'react';
import styles from './TaskItem.module.scss';
import { ITask } from '../../types';
import { useMutateTaskList } from '../../hooks/useMutateTaskList';
import { useModalState } from '../../store';
import clsx from 'clsx';

interface props extends ITask {}

export const TaskItem: FC<props> = memo(({ name, date, priority, id, isComplete }) => {
  const { deleteTask, completeTask } = useMutateTaskList();
  const { toggleModal } = useModalState();
  return (
    <div className={clsx(styles.taskItem, isComplete && styles.isComplete)}>
      <span>{name}</span>
      <span>{new Date(date).toLocaleDateString('ru-ru')}</span>
      <span className={styles[priority]}>{priority}</span>
      <div className={styles.controls}>
        {!isComplete && <button onClick={() => completeTask(id)}>✅</button>}
        {!isComplete && <button onClick={() => toggleModal({ editId: id, mode: 'edit' })}>✍</button> }
        <button onClick={() => deleteTask({ id })}>❌</button>
      </div>
    </div>
  );
});
