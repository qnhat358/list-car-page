import { defineStore, storeToRefs } from 'pinia'
import { carList } from '../storage/data/carList'
import { useLoaderStore } from "@/stores/loader.js";
import { CARS_PER_PAGE } from '../constants';

export const useCarStore = defineStore('car', {
  state: () => ({
    carList: carList,
    filterValue: {
      brand: 'Any Brands',
      year: 'Any Year',
      type: 'Any Types',
    },
    sortValue: 'Most viewed',
    currentPage: 1,
    carsPerPage: CARS_PER_PAGE,
  }),
  getters: {
    getFilteredCars: (state) => {
      return state.carList.filter(function (car) {
        for (var key in state.filterValue) {
          if (state.filterValue[key].includes('Any')) {
            continue;
          }
          if (car[key] !== undefined && car[key] != state.filterValue[key])
            return false;
        }
        return true;
      });
    },
    getTotalPages: (state) => {
      return Math.ceil(state.getFilteredCars.length / state.carsPerPage);
    },
    getDisplayedCars: (state) => {
      // Fake loading data
      const { loadingCircleModal } = storeToRefs(useLoaderStore());
      loadingCircleModal.value = true;
      setTimeout(() => {
        loadingCircleModal.value = false;
      }, 1000)

      //Sorting
      switch (state.sortValue) {
        case 'Most viewed':
          state.getFilteredCars.sort((a, b) => b.isHot - a.isHot);
          break;
        case 'Price Low to High':
          state.getFilteredCars.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
          break;
        case 'Price High to Low':
          state.getFilteredCars.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
          break;

        default:
          break;
      }
      const startIndex = (state.currentPage - 1) * state.carsPerPage;
      const endIndex = startIndex + state.carsPerPage;
      return state.getFilteredCars.slice(startIndex, endIndex);
    }
  },
  actions: {
  },
})