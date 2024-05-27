import { create } from "zustand";

interface OpenModalProps{
  content: string;
  yesButtonText?: string;
  noButtonText?: string;
}

interface ConfirmModal {
  content: string;
  yesButtonText: string;
  noButtonText: string;
  clickYesButton: (value: unknown) => void;
  clickNoButton: (value: unknown) => void;
  openConfirmModal: ({ content, yesButtonText, noButtonText }: OpenModalProps) => Promise<boolean>;
}

const useConfirmModal = create<ConfirmModal>((set, get) => ({
  content: null,
  yesButtonText: null,
  noButtonText: null,
  clickYesButton: null,
  clickNoButton: null,
  openConfirmModal: ({ content, yesButtonText = "확인", noButtonText = "취소" }) => {
    set({ content, yesButtonText, noButtonText });
    
    const promise = new Promise((resolve, reject) => {
      set({ clickYesButton: resolve, clickNoButton: reject });
    });

    return promise.then(
      () => {
        set({ content: null, yesButtonText: null, noButtonText: null });
        return true;
      },
      () => {
        set({ content: null, yesButtonText: null, noButtonText: null });
        return false;
      }
    );
  },
}));

export { useConfirmModal };
