import { AxiosError } from "axios";
import { create } from "zustand";
import api from "../../../auth/api";
import { PATH } from "../../../constants/api";

interface ReportLetter {
  loading: boolean;
  error: AxiosError | null;
  reportLetter: (id: number, callback?: () => void) => void;
}

const useReportLetter = create<ReportLetter>((set) => ({
  loading: false,
  error: null,
  reportLetter: async (id, callback) => {
    set({ loading: true });
    await api
      .post(PATH.DKU.LETTER.REPORT(id))
      .then((res) => {
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

export { useReportLetter };
