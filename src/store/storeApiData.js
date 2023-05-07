export const apiData = (set) => ({
  data: [],
  getData: async () => {
    let dt = await fetch("http://0.0.0.0:3000");
    let res = await dt.json();
    set({ data: res });
  },
});
