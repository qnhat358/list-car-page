<script setup>
import { watch, ref } from "vue";

const props = defineProps({
  modelValue: String,
  title: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "",
  },
  options: {
    type: Array,
  },
  width: {
    type: String,
    default: '250px'
  },
  minWidth: {
    type: String,
    default: ''
  },
});

const emit = defineEmits(["update:modelValue"]);
const selectedValue = ref(props.modelValue);

watch(
  selectedValue,
  newValue => {
    emit('update:modelValue', selectedValue.value);
  }
);
</script>

<template>
  <div class="d-flex flex-column">
    <div class="title text-left text-white pb-2">
      <font-awesome-icon
        v-if="icon"
        :icon="icon"
      />
      {{title}}
    </div>
    <select
      class="custom-select"
      id="inputGroupSelect01"
      v-model="selectedValue"
    >
      <option
        v-for="(option, index) in options"
        :key=index
        :value="option"
      >{{option}}</option>
    </select>
  </div>
</template>

<style lang="scss" scoped>
.custom-select {
  min-width: v-bind(width);
}
</style>
