<template>
  <FormGroup>
    <FormInputGroup class="datatable-search-bar">
      <template #prepend>
        <div class="input-group-text">
          <IconSearch/>
        </div>
      </template>
      <FormInput v-model="filter" id="datatable-filter" name="datatable-filter" placeholder="Search" @input="onInput"/>
    </FormInputGroup>
  </FormGroup>
</template>

<script setup>
import {ref} from "vue";

const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  items: {
    type: Array,
    default: []
  },
  modelValue: {
    type: String,
    default: ''
  }
})

const filter = ref('');

function onInput() {
  emit('update:modelValue', filter.value)
}
</script>

<style lang="scss">
.datatable-search-bar {

  .input-group-text {
    border-right: 0;
    background-color: transparent;
    padding-right: 0;
    color: var(--bs-body-color) !important;

    svg {
      width: 1.125rem;
    }
  }

  .form-control {
    border-left: 0;
    color: var(--bs-body-color) !important;
    box-shadow: none;

  }
}
</style>
