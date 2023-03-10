<script setup>
import { ref, onMounted, watch } from "vue";
import { storeToRefs } from "pinia";
import { useCarStore } from "@/stores/car.js";
import { useLoaderStore } from "@/stores/loader.js";
import LoaderModal from "@/components/common/loader/LoaderModal.vue"
import LoaderCircle from "@/components/common/loader/LoaderCircle.vue"

const { filterValue, sorting, currentPage, getTotalPage, getDisplayedCars } =
  storeToRefs(useCarStore());
const { loadingCircleModal, loadingCircle } = storeToRefs(useLoaderStore());

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

const changeCarFilter = (type) => {
  filterValue.value = type;
  currentPage.value = 1;
  fakeLoading();
}

const fakeLoading = () => {
  loadingCircle.value = true;
  setTimeout(() => {
    loadingCircle.value = false;
  }, 1000)
}

watch(
  () => currentPage.value,
  (currentPage) => {
    fakeLoading();
  }
)

onMounted(() => {
  loadingCircleModal.value = true;
  setTimeout(() => {
    loadingCircleModal.value = false;
  }, 1000)
})
</script>
<template>
  <LoaderModal></LoaderModal>
  <div
    v-if="!loadingCircleModal"
    class="container-fluid text-center"
  >
    <div class="car-filter row overflow-x-hide">
      <div
        v-for="(car, index) in carFilter"
        :key="index"
        class="card col p-0 mx-3"
        :style="[car.type == filterValue ? 'border: 2px solid white': '']"
        @click="changeCarFilter(car.type)"
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
      <LoaderCircle
        class="col"
        v-if="loadingCircle"
      />
      <div
        v-else
        class="col-md-4 mb-4"
        v-for="car in getDisplayedCars"
        :key="car"
      >
        <div
          class="card overflow-hidden"
          style="height: 326px; background-color: #3b3e44"
        >
          <div
            v-if="car.isHot"
            class="triangle d-flex align-items-end justify-content-center"
          >
            <p>HOT</p>
          </div>
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
              <div class="d-flex justify-content-between align-items-center mb-2">
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
          <li
            class="page-item"
            v-for="page in getTotalPage"
            :key="page"
          >
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
  margin-bottom: 6rem;
  .card {
    min-width: 115px;
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
      font-size: 14px;
      font-weight: 500;
      line-height: 16.41px;
    }
  }
  .card:hover {
    filter: brightness(0.9);
  }
}
.car-list {
  .card {
    position: relative;
  }
  .triangle {
    position: absolute;
    top: -60px;
    right: -60px;
    width: 120px;
    height: 120px;
    transform: rotate(45deg);
    background: #d12020;
    p {
      transform: rotate(-45deg);
      color: white;
      font-size: 18px;
      font-weight: 700;
      line-height: 36px;
      margin-bottom: 6px;
    }
  }
  // .card:after {
  //   content: "";
  //   width: 0;
  //   height: 0;
  //   border-style: solid;
  //   border-radius: 10px;
  //   border-width: 0 85px 85px 0;
  //   border-color: transparent #d12020 transparent transparent;
  //   right: 0;
  //   top: 0;
  //   position: absolute;
  // }
  .card-img-top {
    height: 167px;
    object-fit: contain;
    padding: 10px;
  }
  .h3 {
    font-size: 20px;
    font-weight: 700;
    line-height: 23.44px;
  }
  .h4 {
    font-size: 17px;
    font-weight: 500;
    line-height: 19.92px;
  }
  .h2 {
    font-size: 25px;
    font-weight: 500;
    line-height: 29.3px;
  }
  .btn-green {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    background-color: #22332e;
    color: #219653;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 500;
    line-height: 15.23px;
  }
  .btn-primary {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 192px;
    background-color: #386bf1;
    color: #e7ecf3;
    font-size: 16px;
    font-weight: 700;
    line-height: 20.83px;
    border-radius: 8px;
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
    margin-bottom: 54px;
  }
}
@media (max-width: 768px) {
  .car-filter {
    flex-wrap: nowrap;
    .card {
      min-width: 180px;
    }
  }
}
</style>
