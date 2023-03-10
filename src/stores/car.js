import { defineStore } from 'pinia'
import { carList } from '../storage/data/carList'
export const useCarStore = defineStore('car', {
  state: () => ({
    carList: carList,
    filterValue: 'Small',
    sorting: 'trending',
    currentPage: 1,
    carsPerPage: 6
  }),
  getters: {
    getTotalPage: (state) => {
      const filterData = state.carList.filter(item => item.type === state.filterValue);
      return Math.ceil(filterData.length / state.carsPerPage);
    },
    getDisplayedCars: (state) => {
      const filterData = state.carList.filter(item => item.type === state.filterValue);
      filterData.sort((a, b) => b.isHot - a.isHot);
      const startIndex = (state.currentPage - 1) * state.carsPerPage;
      const endIndex = startIndex + state.carsPerPage;
      return filterData.slice(startIndex, endIndex);
    }
  },
  actions: {
  },
})