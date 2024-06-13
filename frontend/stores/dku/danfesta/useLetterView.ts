import { AxiosError } from "axios";
import { create } from "zustand";
import api from "../../../auth/api";
import { PATH } from "../../../constants/api";
import { CustomError } from "../../../types/api";

interface Letter {
  id: number;
  senderName: string;
  contents: string;
  imageUrl: string;
  contactInfo: string;
}

interface LetterView {
  isLoading: boolean;
  error: AxiosError<CustomError> | null;
  letter: Letter;
  open: (letterId: number) => void;
  close: () => void;
  setLetter: (letter: Letter) => void;
  setErrorNull: () => void;
}

const useLetterView = create<LetterView>((set) => ({
  isLoading: false,
  error: null,
  letter: null,
  open: async (letterId: number) => {
    set({ isLoading: true });
    await api
      .get(PATH.DKU.LETTER.GET_ONE(letterId))
      .then((res) => {
        set({ letter: res.data, error: null });
      })
      .catch((error) => {
        set({ error });
      })
      .finally(() => {
        set({ isLoading: false });
      });
  },
  close: () => set({ letter: null }),
  setLetter: (letter) => {
    set({ letter });
  },
  setErrorNull: () => {
    set({ error: null });
  },
}));

export { useLetterView };
