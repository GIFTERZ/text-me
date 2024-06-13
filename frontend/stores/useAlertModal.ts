import { create } from "zustand";

interface AlertModal {
  text: string | null;
  callback: () => void;
  openAlertModal: (text: string, callback?: () => void) => void;
  closeAlertModal: () => void;
}

const useAlertModal = create<AlertModal>((set, get) => ({
  text: null,
  callback: () => {},
  openAlertModal: (text, callback = () => {}) => {
    set({ text, callback });
  },
  closeAlertModal: () => {
    set({ text: null });
    get().callback();
  },
}));

export { useAlertModal };
