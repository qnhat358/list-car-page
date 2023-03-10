import { defineStore } from "pinia";

export const useLoaderStore = defineStore({
  id: "loader",
  state: () => ({
    loadingBar: 0,
    loadingCircle: false,
    loadingCircleModal: 0,
  }),
  getters: {},
  actions: {
    setLoadingBar(val) {
      val ? this.loadingBar++ : (this.loadingBar > 0 ? this.loadingBar-- : this.loadingBar = 0);
    },
    setLoadingCircle(val) {
      this.loadingCircle = val;
    },
    setLoadingCircleModal(val) {
      val ? this.loadingCircleModal++ : (this.loadingCircleModal > 0 ? this.loadingCircleModal-- : this.loadingCircleModal = 0);
    },
  },
});
