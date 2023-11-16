<template>
  <div class="datatable-page-size-select">
    <span>Show</span>
    <FormSelect :model-value="pageSize" :options="options" id="datatable-page-size-select" name="datatable-page-size-select" @input="onInput"/>
    <span>entries</span>
  </div>
</template>

<script setup>
const emit = defineEmits(['update:pageSize'])
const props = defineProps({
  pageSize: {
    type: Number,
    default: 25,
  }
})

const options = [
  {text: '10', value: 10},
  {text: '25', value: 25},
  {text: '50', value: 50},
  {text: '100', value: 100},
  {text: '200', value: 200},
  {text: '500', value: 500},
]

function onInput(e){
  emit('update:pageSize', parseInt(e.target.value));
}
</script>

<style lang="scss">
.datatable-page-size-select {
  font-size: 1rem;
  font-weight: 300;
  display: flex;
  align-content: center;
  align-items: center;
  gap: .75rem;
}
</style>
