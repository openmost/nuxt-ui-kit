<template>
  <div class="d-flex gap-2">
    <Button variant="surface" circle aria-label="Previous page" :disabled="disabledPrevPage" @click="goToPreviousPage">
      <IconAngleLeft/>
    </Button>

    <Button variant="surface" circle aria-label="Next page" :disabled="disabledNextPage" @click="goToNextPage">
      <IconAngleRight/>
    </Button>
  </div>
</template>

<script setup>
import {computed} from "vue";

const emit = defineEmits(['change'])
const props = defineProps({
  pageSize: {
    type: Number,
    default: 25,
  },
  pageNumber: {
    type: Number,
    default: 1
  },
  totalItems: {
    type: Number,
    required: true,
  },
})

const disabledPrevPage = computed(() => {
  return props.pageNumber === 1;
});

const disabledNextPage = computed(() => {
  return (props.pageNumber * props.pageSize) > (props.totalItems - props.pageSize);
})

const prevPageNumber = computed(() => {
  return (props.pageNumber - 1) > 0 ? props.pageNumber - 1 : 1;
})

const nextPageNumber = computed(() => {
  return props.pageNumber + 1
})


function goToPreviousPage() {
  emit('change', prevPageNumber.value);
}

function goToNextPage() {
  emit('change', nextPageNumber.value);
}
</script>
