import { AxiosError } from "axios";
import { create } from "zustand";
import api from "../../auth/api";
import { PATH } from "../../constants/api";

interface Letter {
  id: string;
  senderName: string;
  contents: string;
  imageUrl: string;
  contactInfo: string;
}

interface MyLetters {
  isLoading: boolean;
  error: AxiosError | null;
  letters: Letter[];
  getLetters: () => void;
}

const useMyLetters = create<MyLetters>((set) => ({
  isLoading: false,
  error: null,
  letters: [],
  getLetters: async () => {
    set({ isLoading: true });
    await api
      .get(PATH.DKU.LETTER.EVENT)
      .then((res) => {
        set({ letters: res.data });
      })
      .catch((error) => {
        set({ error });
      })
      .finally(() => {
        set({ isLoading: false });
      });
  },
}));

export { useMyLetters };
