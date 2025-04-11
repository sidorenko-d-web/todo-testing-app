import clsx from 'clsx';
import { Button } from '../shared';
import styles from './Sort.module.scss';
import { useSortState } from '../../store/sortStore';
import { TypeSort } from '../../types';

export const Sort = () => {
  const sort = [
    { name: 'Task name', isClickable: false },
    { name: 'Date', isClickable: true },
    { name: 'Priority', isClickable: true },
    { name: '', isClickable: false },
  ];

  const { sortOption, asc, setSortOption } = useSortState();

  return (
    <div className={styles.sortWrapper}>
      {sort.map(item => (
        <Button
          disabled={!item.isClickable}
          className={clsx(styles.sortItem, !item.isClickable && styles.disabled)}
          variant="sort"
          key={item.name}
          onClick={() => setSortOption(item.name as TypeSort)}
        >
          {item.name} {sortOption === item.name && (asc ? '▲' : '▼')}
        </Button>
      ))}
    </div>
  );
};
