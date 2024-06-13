import { AxiosError } from "axios";
import { create } from "zustand";
import api from "../../../auth/api";
import { PATH } from "../../../constants/api";

interface Letter {
  id: number;
  senderName: string;
  contents: string;
  imageUrl: string;
  contactInfo: string;
  viewCount: number;
  status: string;
}

interface Filter {
  status: string | null;
}

interface Letters {
  isLoading: boolean;
  error: AxiosError | null;
  letters: Letter[];
  getLetters: (params?: Filter) => void;
}

const useAdminLetters = create<Letters>((set) => ({
  isLoading: false,
  error: null,
  letters: [],
  getLetters: async (params: Filter = { status: null }) => {
    set({ isLoading: true });
    await api
      .get(PATH.DKU.LETTER.ADMIN, { params })
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

export { useAdminLetters };
