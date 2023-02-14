export const countData = (set) => ({
  count: 0,
  countUp: () => set((state) => ({ count: state.count + 1 })),
  countDown: () => set((state) => ({ count: state.count - 1 })),
});
