import { defineStore } from "pinia";

export const useLoaderStore = defineStore({
  id: "loader",
  state: () => ({
    loadingCircle: false,
    loadingCircleModal: false,
  }),
  getters: {},
  actions: {
  },
});
