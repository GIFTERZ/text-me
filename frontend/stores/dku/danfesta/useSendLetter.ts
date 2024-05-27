import { AxiosError } from "axios";
import { create } from "zustand";
import api from "../../../auth/api";
import { PATH } from "../../../constants/api";
import { CustomError } from "../../../types/api";

type LetterBody = {
  contents: string;
  senderName: string;
  imageUrl: string;
  contactInfo: string;
};

interface SendLetter {
  loading: boolean;
  error: AxiosError<CustomError> | null;
  sendLetter: (data: LetterBody, callback: () => void) => void;
}

const useSendLetter = create<SendLetter>((set) => ({
  loading: false,
  error: null,
  sendLetter: async (data, callback) => {
    set({ loading: true });
    await api
      .post(PATH.DKU.LETTER.EVENT, data)
      .then((res) => {
        callback();
      })
      .catch((error) => {
        set({ error });
      })
      .finally(() => {
        set({ loading: false, error: null });
      });
  },
}));

export { useSendLetter };
