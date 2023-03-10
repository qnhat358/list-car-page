<script setup>
const props = defineProps({
  size: {
    type: String,
    default: "40",
  },
});
</script>

<template>
  <div class="d-flex justify-center">
    <v-progress-circular
      indeterminate
      color="gray"
      :size="size"
    ></v-progress-circular>
  </div>
</template>

<style lang="scss" scoped></style>
