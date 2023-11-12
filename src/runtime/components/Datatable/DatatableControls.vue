<template>
  <ActionsWrapper class="datatable-controls justify-content-end">

    <DatatablePageSizeSelect :page-size="pageSize" @input="onInputPageSize"/>

    <DatatableTotalItems :total-items="totalItems" :page-size="pageSize" :page-number="pageNumber"/>

    <DatatablePagination :total-items="totalItems" :page-size="pageSize" :page-number="pageNumber" @change="onChangePageNumber"/>

  </ActionsWrapper>
</template>

<script setup>
const emit = defineEmits(['update:pageSize', 'update:pageNumber'])
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

function onInputPageSize(e) {
  emit('update:pageSize', parseInt(e.target.value));
}

function onChangePageNumber(value) {
  emit('update:pageNumber', value);
}
</script>
