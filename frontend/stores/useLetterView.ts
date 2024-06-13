import { AxiosError } from "axios";
import { create } from "zustand";
import { Letter } from "../types";
import api from "../auth/api";
import { PATH } from "../constants/api";

interface LetterView {
  id: number | null;
  isOpened: boolean;
  isLoading: boolean;
  error: AxiosError | null;
  letter: Letter | null;
  open: (id: number) => void;
  close: () => void;
}

const useLetterView = create<LetterView>((set, get) => ({
  id: null,
  isOpened: false,
  isLoading: false,
  error: null,
  letter: null,
  open: async (id: number) => {
    set({ isOpened: true, id, isLoading: true });
    await api
      .get(PATH.LETTER.GET_ONE(id))
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
  close: () => set({ isOpened: false, id: null, letter: null }),
}));

export { useLetterView };
