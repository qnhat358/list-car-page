<script setup>
import HelloWorld from "./components/HelloWorld.vue";

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
    <div class="car-filter d-flex justify-content-between">
      <div
        v-for="(car, index) in carFilter"
        :key="index"
        class="card p-0"
        style="width: 235px; height: 160px; background-color: #3b3e44"
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
          <p class="card-text text-light fs-4">
            {{ car.type }}
          </p>
        </div>
      </div>
    </div>
    <div class="car-list row">
      <div class="col-md-4" v-for="n in 6" :key="n">
        <div class="card" style="height: 430px; background-color: #3b3e44">
          <img
            src="src/assets/images/car-large.png"
            class="card-img-top"
            alt="..."
          />
          <div
            class="card-body text-light d-flex flex-column justify-content-between p-4"
            style="background-color: #222529; height: 50%"
          >
            <div>
              <div class="d-flex justify-content-between align-items-center">
                <p class="card-title fs-3 mb-0">BMW i10 - 2021</p>
                <div class="btn-green px-3">SPECIAL DEAL</div>
              </div>
              <p class="text-start text-secondary fs-4 fw-semibold">
                Tesla Model S
              </p>
            </div>
            <div class="d-flex justify-content-between">
              <p class="fs-3 text-white text-opacity-75">$124.00</p>
              <div class="btn btn-primary">Reserve deal</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.car-filter {
  margin-bottom: 8rem;
  .card-img-top {
    height: 70%;
    object-fit: contain;
    padding: 10px;
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
</style>
