import { persist } from "zustand/middleware";

export const countData = persist(
  (set) => ({
    count: 0,
    countUp: () => set((state) => ({ count: state.count + 1 })),
    countDown: () => set((state) => ({ count: state.count - 1 })),
  }),
  { name: "caca2", partialize: (state) => ({ count: state.count }) }
);
