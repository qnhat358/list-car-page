<script setup>
const props = defineProps({
  image: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="card">
    <img
      :src="`src/assets/images/${image}`"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body d-flex align-items-center justify-content-center text-center">
      <p class="card-text text-light">
        {{ title }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
    background-color: #222529;
    height: 30%;
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
</style>
