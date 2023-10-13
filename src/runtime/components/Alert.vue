<template>
  <div :class="alertClass" role="alert" v-if="show">
    <slot>Alert message</slot>
  </div>
</template>

<script setup>
import {defineProps, computed} from "@vue/runtime-core";

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String,
    default: 'info'
  },
})

const alertClass = computed(() => {
  return [
    'alert',
    props.variant ? `alert-${props.variant}` : null,
  ]
})
</script>
