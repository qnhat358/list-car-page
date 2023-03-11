<script setup>
import { computed, ref, watch } from "vue";

const props = defineProps({
  currentPage: {
    type: Number,
    default: 1,
  },
  totalPages: {
    type: Number,
    default: 1,
  },
  totalVisible: {
    type: Number,
    default: 1,
  },

});

const emit = defineEmits(["update:currentPage"]);
const currentPageValue = ref(props.currentPage);

watch(
  currentPageValue,
  newValue => {
    console.log(newValue);
    emit('update:currentPage', currentPageValue.value);
  }
);

const pagesToShow = computed(() => {
  const pages = []
  if (props.totalPages <= props.totalVisible) {
    for (let i = 1; i <= props.totalPages; i++) {
      pages.push(i);
    }
  } else {
    let startPage = 1;
    let endPage = props.totalPages;
    const middle = Math.floor(props.totalVisible / 2);
    if (currentPageValue.value > middle) {
      startPage = props.currentPage - middle;
    }
    if (currentPageValue.value + middle < props.totalPages) {
      endPage = currentPageValue.value + middle;
    }
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i)
    }
  }
  return pages
});

</script>

<template>
  <div>
    <nav>
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <div
            class="page-link"
            :class="{ disabled: currentPageValue == 1 }"
            @click="--currentPageValue"
          >
            Previous
          </div>
        </li>
        <li
          v-if="pagesToShow[0] > 1"
          class="page-item disabled"
        >
          <p class="page-link">...</p>
        </li>
        <li
          class="page-item"
          v-for="page in pagesToShow"
          :key="page"
        >
          <div
            class="page-link"
            :style="page == currentPageValue ? 'color: #E8AE1B' : ''"
            @click="currentPageValue = page"
          >
            {{ page }}
          </div>
        </li>
        <li
          v-if="pagesToShow[pagesToShow.length - 1] < totalPages "
          class="page-item disabled"
        >
          <p class="page-link">...</p>
        </li>
        <li class="page-item">
          <div
            class="page-link"
            :class="{ disabled: currentPageValue == totalPages }"
            @click="++currentPageValue"
          >
            Next
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.pagination {
  font-size: 2rem;
  padding: 1.5rem;
  .page-item {
    margin-right: 2rem;
    .page-link:hover {
      background-color: #374151;
      border-radius: 0;
    }
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
</style>
