<template>
  <div class="datatable-total-items">
    <data :value="pageFirstItem">{{ pageFirstItem }}</data>
    <span>-</span>
    <data :value="pageLastItem">{{ pageLastItem }}</data>
    <span> of </span>
    <data :value="totalItems">{{ totalItems }}</data>
  </div>
</template>

<script setup>
import {computed} from "vue";

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
  },
})

const offset = computed(() => {
  return (props.pageNumber * props.pageSize) - props.pageSize;
})

const pageFirstItem = computed(() => {
  return offset.value + 1;
})

const pageLastItem = computed(() => {
  return pageFirstItem.value + props.pageSize;
})


</script>

<style lang="scss">
.datatable-total-items {
  font-size: 1rem;
  font-weight: 300;
}
</style>
