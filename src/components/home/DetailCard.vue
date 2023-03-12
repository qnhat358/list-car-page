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
    <div class="card-body d-flex flex-column justify-content-between">
      <div>
        <div class="d-flex justify-content-between align-items-center mb-2">
          <p class="h3 mb-0">{{ name }}</p>
          <div class="btn-green px-3">SPECIAL DEAL</div>
        </div>
        <p class="text-left h4">{{ detail }}</p>
      </div>
      <div class="d-flex justify-content-between align-items-center">
        <div class="div">
          <p class="h2 mb-0">${{ price }}</p>
          <p class="h5 mb-0 text-left">per day</p>
        </div>
        <div class="btn btn-primary">Reserve deal</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  position: relative;
  height: 326px;
  background-color: var(--gray-3);
  .triangle {
    position: absolute;
    top: -60px;
    right: -60px;
    width: 120px;
    height: 120px;
    transform: rotate(45deg);
    background: var(--red-1);
    p {
      transform: rotate(-45deg);
      color: white;
      font-size: 18px;
      font-weight: 700;
      line-height: 36px;
      margin-bottom: 6px;
    }
  }
  &-img-top {
    height: 167px;
    object-fit: contain;
    padding: 10px;
  }
  &-body {
    background-color: var(--gray-2);
    height: 50%;
    @mixin heading($font-size, $font-weight, $line-height, $color) {
      font-size: $font-size;
      font-weight: $font-weight;
      line-height: $line-height;
      color: $color;
    }
    .h3 {
      @include heading(20px, 700, 23.44px, var(--color-text-1));
    }
    .h4 {
      @include heading(17px, 500, 19.92px, var(--color-text-3));
    }
    .h2 {
      @include heading(25px, 500, 29.3px, var(--color-text-2));
    }
    .h5 {
      @include heading(17px, 400, 19.92px, var(--color-text-3));
      display: none;
    }

    .btn-green {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 30px;
      background-color: var(--green-1);
      color: var(--color-text-4);
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
      white-space: nowrap;
      padding: 10.2px 23.5px;
      background-color: var(--blue-1);
      color: var(--color-text-1);
      font-size: 16px;
      font-weight: 700;
      line-height: 20.83px;
      border-radius: 8px;
    }
  }
}

@media (max-width: 768px) {
  .h5 {
    display: block !important;
  }
}
</style>
