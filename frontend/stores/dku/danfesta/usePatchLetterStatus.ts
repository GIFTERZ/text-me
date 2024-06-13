import { AxiosError } from "axios";
import { create } from "zustand";
import api from "../../../auth/api";
import { PATH } from "../../../constants/api";

interface PatchLetterStatus {
  loading: boolean;
  error: AxiosError | null;
  patchLetterStatus: (
    id: number,
    status: "deleted" | "activate",
    callback?: () => void
  ) => void;
}

const usePatchLetterStatus = create<PatchLetterStatus>((set) => ({
  loading: false,
  error: null,
  patchLetterStatus: async (id, status, callback) => {
    set({ loading: true });
    await api
      .patch(PATH.DKU.LETTER.PATCH_LETTER_STATUS(id, status))
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

export { usePatchLetterStatus };
