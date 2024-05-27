import { AxiosError } from "axios";
import { create } from "zustand";
import { PATH } from "../constants/api";
import api from "../auth/api";
import { CustomError } from "../types/api";

type LetterBody = {
  contactInfo: string;
  contents: string;
  senderName: string;
  imageUrl: string;
};

interface SendLetter {
  loading: boolean;
  error: AxiosError<CustomError> | null;
  sendLetter: (data: LetterBody, callback: () => void) => void;
}

const useSendDanfestaLetter = create<SendLetter>((set) => ({
  loading: false,
  error: null,
  sendLetter: async (data, callback) => {
    set({ loading: true });
    await api
      .post(PATH.DKU.LETTER.EVENT, data)
      .then((res) => {
        set({ error: null });
        callback();
      })
      .catch((error) => {
        set({ error });
      })
      .finally(() => {
        set({ loading: false });
      });
  },
}));

export { useSendDanfestaLetter };
