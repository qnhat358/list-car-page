import { defineStore } from "pinia";

export const useLoaderStore = defineStore({
  id: "loader",
  state: () => ({
    loadingBar: false,
    loadingCircle: false,
    loadingCircleModal: false,
  }),
  getters: {},
  actions: {
  },
});
