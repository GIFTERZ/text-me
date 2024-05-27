import { AxiosError } from "axios";
import { create } from "zustand";
import api from "../../../auth/api";
import { PATH } from "../../../constants/api";
import { CustomError } from "../../../types/api";

interface LetterInfo {
  id: number;
  imageUrl: string;
  mine: boolean;
}

interface Filter {
  gender: string | null;
}

interface Letters {
  isLoading: boolean;
  error: AxiosError | null;
  letterInfos: LetterInfo[];
  getLetters: (
    params?: Filter,
    onSuccess?: () => void,
    onError?: (err: AxiosError<CustomError>) => void
  ) => void;
}

const useLetters = create<Letters>((set) => ({
  isLoading: false,
  error: null,
  letterInfos: [],
  getLetters: async (params: Filter = { gender: null }, onSuccess, onError) => {
    set({ isLoading: true });
    await api
      .get(PATH.DKU.LETTER.EVENT, { params })
      .then((res) => {
        set({ letterInfos: res.data, error: null });
        onSuccess && onSuccess();
      })
      .catch((error) => {
        set({ error });
        onError && onError(error);
      })
      .finally(() => {
        set({ isLoading: false });
      });
  },
}));

export { useLetters };
