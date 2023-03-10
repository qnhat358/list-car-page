<script setup>
const props = defineProps({
  size: {
    type: String,
    default: "3rem",
  },
});
</script>

<template>
  <div class="d-flex justify-content-center">
    <div
      class="spinner-border"
      role="status"
    >
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.spinner-border {
  width: v-bind(size);
  height: v-bind(size);
}
</style>
