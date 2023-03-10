<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useCarStore } from "@/stores/car.js";

const { filterValue, sorting, currentPage, getTotalPage, getDisplayedCars } =
  storeToRefs(useCarStore());

const carFilter = [
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
</script>
<template>
  <div class="container-fluid text-center">
    <div class="car-filter d-flex justify-content-xl-between overflow-x-hide">
      <div
        v-for="(car, index) in carFilter"
        :key="index"
        class="card p-0 mr-5 mr-0"
        @click="(filterValue = car.type), (currentPage = 1)"
      >
        <img
          :src="`src/assets/images/${car.image}`"
          class="card-img-top"
          alt="..."
        />
        <div
          class="card-body d-flex align-items-center justify-content-center text-center"
          style="background-color: #222529; height: 30%"
        >
          <p class="card-text text-light">
            {{ car.type }}
          </p>
        </div>
      </div>
    </div>
    <div class="car-list row">
      <div class="col-md-4 mb-4" v-for="car in getDisplayedCars" :key="car">
        <div class="card" style="height: 430px; background-color: #3b3e44">
          <img
            src="src/assets/images/car-large.png"
            class="card-img-top"
            alt="..."
          />
          <div
            class="card-body text-light d-flex flex-column justify-content-between"
            style="background-color: #222529; height: 50%"
          >
            <div>
              <div
                class="d-flex justify-content-between align-items-center mb-2"
              >
                <p class="h3 mb-0 text-white">{{ car.name }}</p>
                <div class="btn-green px-3">SPECIAL DEAL</div>
              </div>
              <p class="text-left h4 text-secondary">{{ car.detail }}</p>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <p class="h2 text-white-50 mb-0">{{ car.price }}</p>
              <div class="btn btn-primary">Reserve deal</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <nav>
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <div
              class="page-link"
              :class="{ disabled: currentPage == '1' }"
              @click="--currentPage"
            >
              Previous
            </div>
          </li>
          <li class="page-item" v-for="page in getTotalPage" :key="page">
            <div
              class="page-link"
              :style="page == currentPage ? 'color: #E8AE1B' : ''"
              @click="currentPage = page"
            >
              {{ page }}
            </div>
          </li>
          <li class="page-item">
            <div
              class="page-link"
              :class="{ disabled: currentPage == getTotalPage }"
              @click="++currentPage"
            >
              Next
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.car-filter {
  margin-bottom: 8rem;
  .card {
    min-width: 235px;
    height: 160px;
    background-color: #3b3e44;
    border: 0px;
    border-radius: 5px;
    cursor: pointer;
    .card-img-top {
      height: 70%;
      object-fit: contain;
      padding: 10px;
    }
    .card-body {
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    }
    .card-text {
      font-size: 24px;
    }
  }
  .card:hover {
    filter: brightness(0.9);
  }
}
.car-list {
  .card-img-top {
    height: 220px;
    object-fit: contain;
    padding: 10px;
  }
  .btn-green {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    background-color: #22332e;
    color: #219653;
    border-radius: 20px;
    font-size: 16px;
    font-weight: 600;
  }
  .btn-primary {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 192px;
    background-color: #386bf1;
    color: #e7ecf3;
    font-size: 24px;
    font-weight: 400;
    border-radius: 10px;
  }
}
.pagination {
  font-size: 2rem;
  padding: 1.5rem;
  .page-item {
    margin-right: 2rem;
    .page-link {
      background-color: #141416;
      border: 0px;
      color: white;
      cursor: pointer;
    }
    .disabled {
      cursor: context-menu;
      pointer-events: none;
    }
  }
}

@media (max-width: 1024px) {
  .car-filter {
    margin-bottom: 10px;
  }
}
</style>
