<template>
  <div :class="rowClass">
    <slot/>
  </div>
</template>

<script setup>
import {computed} from "vue";

const props = defineProps({
  g: {
    type: [Number, String],
  }
})

const rowClass = computed(() => {
  return [
    'row',
    props.g ? `g-${props.g}` : null,
  ]
})
</script>
