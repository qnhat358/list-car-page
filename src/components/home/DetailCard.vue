<script setup>
const props = defineProps({
  image: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
  detail: {
    type: String,
    default: "",
  },
  price: {
    type: String,
    default: "",
  },
  isHot: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="card overflow-hidden">
    <div
      v-if="isHot"
      class="triangle d-flex align-items-end justify-content-center"
    >
      <p>HOT</p>
    </div>
    <img
      :src="`src/assets/images/${image}`"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body text-light d-flex flex-column justify-content-between">
      <div>
        <div class="d-flex justify-content-between align-items-center mb-2">
          <p class="h3 mb-0 text-white">{{ name }}</p>
          <div class="btn-green px-3">SPECIAL DEAL</div>
        </div>
        <p class="text-left h4 text-secondary">{{ detail }}</p>
      </div>
      <div class="d-flex justify-content-between align-items-center">
        <p class="h2 text-white-50 mb-0">${{ price }}</p>
        <div class="btn btn-primary">Reserve deal</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  position: relative;
  height: 326px;
  background-color: #3b3e44;
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
.card-img-top {
  height: 167px;
  object-fit: contain;
  padding: 10px;
}
.card-body {
  background-color: #222529;
  height: 50%;
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
    background-color: rgba(39, 174, 96, 0.1);
    color: #219653;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 500;
    line-height: 15.23px;
    cursor: pointer;
  }
  .btn-primary {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 192px;
    background-color: #3b71fe;
    color: #e7ecf3;
    font-size: 16px;
    font-weight: 700;
    line-height: 20.83px;
    border-radius: 8px;
  }
}
</style>
