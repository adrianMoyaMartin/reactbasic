import { create } from "zustand";
import { apiData } from "./storeApiData";
import { countData } from "./storeCounter";
import { persist } from "zustand/middleware";

const useStorage = create(
  persist(
    (...a) => ({
      ...apiData(...a),
      ...countData(...a),
    }),
    { name: "caca2", partialize: (state) => ({ count: state.count }) }
  )
);
export default useStorage;
