<script setup>
import { ref, onMounted, watch } from "vue";
import { storeToRefs } from "pinia";
import { useCarStore } from "@/stores/car.js";
import LoaderModal from "@/components/common/loader/LoaderModal.vue"
import Dropdown from "@/components/common/input/Dropdown.vue"
import Pagination from "@/components/common/navigation/Pagination.vue"
import SimpleCard from "@/components/home/SimpleCard.vue"
import DetailCard from "@/components/home/DetailCard.vue"

const { filterValue, sortValue, currentPage, getTotalPages, getDisplayedCars } =
  storeToRefs(useCarStore());

const isLoading = ref(false);
const carFilter = ref({
  brand: {
    title: 'CAR BRAND',
    icon: 'fa-solid fa-car-rear',
    selected: 'Any Brands',
    options: [
      'Any Brands', 'BMW', 'Toyota', 'Mercedes'
    ]
  },
  year: {
    title: 'YEAR',
    icon: 'fa-regular fa-calendar-days',
    selected: 'Any Year',
    options: [
      'Any Year', '2023', '2022', '2021', '2020', '2019'
    ]
  },
  sort: {
    title: 'SORT',
    icon: 'fa-solid fa-arrow-down-short-wide',
    selected: 'Most viewed',
    options: [
      'Most viewed', 'Price Low to High', 'Price High to Low'
    ]
  }
})
const carType = [
  {
    type: "Small",
    image: "car-small.png",
  },
  {
    type: "Large",
    image: "car-large.png",
  },
  {
    type: "Premium",
    image: "car-premium.png",
  },
  {
    type: "SUVs",
    image: "car-suvs.png",
  },
  {
    type: "People carries",
    image: "car-people-carries.png",
  },
];

// This will help update Dropdown component
const uniqueKey = ref(0);
const updateDropdowns = () => {
  uniqueKey.value = Math.random();
};

const searchHandle = () => {
  filterValue.value.brand = carFilter.value.brand.selected;
  filterValue.value.year = carFilter.value.year.selected;
  sortValue.value = carFilter.value.sort.selected;
}

const resetHandle = () => {
  carFilter.value.brand.selected = carFilter.value.brand.options[0];
  carFilter.value.year.selected = carFilter.value.year.options[0];
  carFilter.value.sort.selected = carFilter.value.sort.options[0];
  filterValue.value.type = 'Any Types';
  searchHandle();
}

const changeCarType = (type) => {
  if (filterValue.value.type == type) {
    filterValue.value.type = 'Any Types';
  } else {
    filterValue.value.type = type;
  }
  currentPage.value = 1;
}

onMounted(() => {
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
  watch(carFilter, updateDropdowns, { deep: true });
})
</script>
<template>
  <LoaderModal></LoaderModal>
  <div
    v-if="!isLoading"
    class="container-fluid text-center"
  >
    <div class="car-filter d-flex justify-content-between mb-5">
      <Dropdown
        v-for="(value, key) in carFilter"
        :key="key + uniqueKey"
        :title="value.title"
        :icon="value.icon"
        v-model="value.selected"
        :options="value.options"
      />
      <button
        type="button"
        class="btn h-50 align-self-end font-weight-bold"
        @click="searchHandle"
      >SEARCH CAR NOW</button>
      <button
        type="button"
        class="btn h-50 align-self-end font-weight-bold"
        @click="resetHandle"
      >RESET</button>
    </div>
    <div class="car-type row overflow-x-hide">
      <SimpleCard
        v-for="(car, index) in carType"
        :key="index"
        class="col p-0 mx-3"
        :style="[car.type == filterValue.type ? 'border: 2px solid white': '']"
        @click="changeCarType(car.type)"
        :image="car.image"
        :title="car.type"
      />
    </div>
    <div class="car-list row">
      <div
        class="col-md-4 mb-4"
        v-for="car in getDisplayedCars"
        :key="car"
      >
        <DetailCard
          :image='car.image'
          :name='car.name'
          :detail='car.detail'
          :price='car.price'
          :isHot='car.isHot'
        />
      </div>
    </div>
    <Pagination
      v-model:currentPage="currentPage"
      :totalPages="getTotalPages"
      :totalVisible="5"
    />
  </div>
</template>

<style lang="scss" scoped>
.car-filter {
  .btn {
    background-color: #e8ae1b;
    color: white;
  }
  .btn:hover {
    background-color: #333333;
  }
}
.car-type {
  margin-bottom: 6rem;
}

@media (max-width: 1024px) {
  .car-type {
    margin-bottom: 54px;
  }
}
@media (max-width: 768px) {
  .car-type {
    flex-wrap: nowrap;
    .card {
      min-width: 180px;
    }
  }
}
</style>
