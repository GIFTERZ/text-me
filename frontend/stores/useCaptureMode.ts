import { create } from "zustand";

interface CaptureMode {
  isCaptureMode: boolean;
  toggleCaptureMode: () => void;
}

const useCaptureMode = create<CaptureMode>((set, get) => ({
  isCaptureMode: false,
  toggleCaptureMode: () => {
    set({ isCaptureMode: !get().isCaptureMode });
  },
}));

export { useCaptureMode };
