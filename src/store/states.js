import { create } from "zustand";
import { apiData } from "./storeApiData";
import { countData } from "./storeCounter";

const useStorage = create((...a) => ({
  ...apiData(...a),
  ...countData(...a),
}));
export default useStorage;
