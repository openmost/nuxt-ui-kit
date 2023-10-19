<template>
  <component :is="tag" class="btn-group" :role="ariaRole">
    <slot/>
  </component>
</template>

<script setup>
import {computed} from "@vue/runtime-core";

const props = defineProps({
  ariaRole: {
    type: String,
    default: 'group',
  },
  size: {
    type: String,
  },
  tag: {
    type: String,
    default: 'div'
  },
  vertical: {
    type: Boolean,
    default: false,
  }
})

const groupClass = computed(() => {
  return [
      'btn-group',
      props.size ? `btn-group-${props.size}` : null,
      props.vertical ? 'btn-group-vertical' : null,
  ]
})
</script>
