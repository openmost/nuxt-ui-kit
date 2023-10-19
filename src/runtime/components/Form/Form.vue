<template>
  <form
      :class="formClass"
      :disabled="disabled"
      :name="name"
      :id="id"
      :novalidate="novalidate"
      @submit="onSubmit">
    <slot/>
  </form>
</template>

<script setup>
import {computed} from "vue";

const emit = defineEmits(['submit']);
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  id: {
    type: String,
  },
  name: {
    type: String,
  },
  novalidate: {
    Boolean: false,
  },
  validated: {
    Boolean: false,
  }
})

const formClass = computed(() => {
  return [
    props.validated ? 'was-validated' : null,
  ];
})

function onSubmit(event) {
  emit('submit', event)
}
</script>
