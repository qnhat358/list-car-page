<script setup>
import { storeToRefs } from "pinia";
import { useLoaderStore } from "@/stores/loader.js";

const { loadingBar } = storeToRefs(useLoaderStore());

const props = defineProps({
  color: {
    type: String,
    default: "#009fe8",
  },
});
</script>

<template>
  <div class="loader-bar" v-if="loadingBar > 0">
    <div class="progress-bar">
      <div class="progress-bar-value w-100 h-100"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.loader-bar {
  z-index: 9999;
  position: absolute;
  width: 100%;
}
.progress-bar {
  height: 4px;
  background-color: rgba(0, 123, 224, 0.2);
  width: 100%;
  overflow: hidden;

  &-value {
    background-color: v-bind(color);
    animation: indeterminateAnimation 1s infinite linear;
    transform-origin: 0% 50%;
  }
}

@keyframes indeterminateAnimation {
  0% {
    transform: translateX(0) scaleX(0);
  }
  50% {
    transform: translateX(0) scaleX(0.5);
  }
  100% {
    transform: translateX(100%) scaleX(0.5);
  }
}
</style>
