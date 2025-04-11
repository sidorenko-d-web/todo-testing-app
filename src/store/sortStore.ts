import { create } from 'zustand';
import { TypeSort } from '../types';

interface SortState {
  sortOption: TypeSort;
  asc: boolean;
  setSortOption: (sortOption: TypeSort) => void;
}

export const useSortState = create<SortState>()((set, get) => ({
  // Начальное состояние
  sortOption: 'Date',
  asc: false ,

  // Методы для обновления состояния
  setSortOption: (sortOption: TypeSort) => {
    const { sortOption: prevSortOption, asc: prevAsc } = get();
    set({ sortOption, asc: prevSortOption === sortOption ? !prevAsc : false });
  },
}));
