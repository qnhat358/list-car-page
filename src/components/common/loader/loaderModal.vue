<script setup>
import { storeToRefs } from "pinia";
import { useLoaderStore } from "@/stores/loader.js";
import Modal from "@/components/common/modal/Modal.vue";
import LoaderCircle from "./LoaderCircle.vue";

const { loadingCircleModal } = storeToRefs(useLoaderStore());
</script>
<template>
  <Modal :show="loadingCircleModal > 0">
    <LoaderCircle />
  </Modal>
</template>
