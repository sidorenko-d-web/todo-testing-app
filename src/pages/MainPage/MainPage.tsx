import styles from './MainPage.module.scss';

import { Button, Modal, Sort, TaskItem } from '../../components';
import { useSortTasksList } from '../../hooks';
import { useModalState } from '../../store';

export const MainPage = () => {
  const sortedTaskList = useSortTasksList();

  const { toggleModal } = useModalState();

  return (
    <>
      <header className={styles.header}>
        <h1>Todo List</h1>
        <Button onClick={() => toggleModal({mode: 'create'})} variant="primary">
          +
        </Button>
      </header>
      <main className={styles.mainWrapper}>
        <Sort />

        <div className={styles.taskWrapper}>
          {sortedTaskList.filter(item => !item.isComplete).map(item => (
            <TaskItem {...item} key={item.name} />
          ))}
        </div>
        <div className={styles.taskWrapper}>
          {sortedTaskList.filter(item => item.isComplete).map(item => (
            <TaskItem {...item} key={item.name} />
          ))}
        </div>
      </main>
      <Modal />
    </>
  );
};
