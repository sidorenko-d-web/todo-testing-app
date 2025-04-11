import { create } from 'zustand';

type TypeModalMode = 'edit' | 'create';

interface ModalState {
  mode: TypeModalMode;
  editId?: number;
  isOpened: boolean;
  toggleModal: (arg?: { mode?: TypeModalMode; editId?: number }) => void;
}

export const useModalState = create<ModalState>()((set, get) => ({
  // Начальное состояние
  mode: 'create',
  isOpened: false,

  // Методы для обновления состояния
  toggleModal: arg => {
    const { isOpened } = get();
    if (isOpened) {
      set({ isOpened: !isOpened, mode: undefined, editId: undefined });
    } else {
      set({ isOpened: !isOpened, mode: arg?.mode, editId: arg?.editId });
    }
  },
}));
