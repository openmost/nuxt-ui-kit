<template>
  <div :class="colClass">
    <slot/>
  </div>
</template>

<script setup>
import {computed} from "@vue/runtime-core";

const props = defineProps({
  sm: {
    type: [Number, String],
  },
  md: {
    type: [Number, String],
  },
  lg: {
    type: [Number, String],
  },
  xl: {
    type: [Number, String],
  },
  xxl: {
    type: [Number, String],
  }
})

const colClass = computed(() => {
  return [
    props.sm ? `col-sm-${props.sm}` : null,
    props.md ? `col-md-${props.md}` : null,
    props.lg ? `col-lg-${props.lg}` : null,
    props.xl ? `col-xl-${props.xl}` : null,
    props.xxl ? `col-xxl-${props.xxl}` : null,
  ]
})
</script>
