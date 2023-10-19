<template>
  <component :is="tag" :class="listGroupClass">
    <slot/>
  </component>
</template>

<script setup>
import {computed} from "@vue/runtime-core";

const props = defineProps({
  flush: {
    type: Boolean,
    default: false,
  },
  numbered: {
    type: Boolean,
    default: false,
  },
  horizontal: {
    type: Boolean,
    default: false,
  },
  tag: {
    type: String,
    default: 'div',
  }
})

const listGroupClass = computed(() => {
  return [
    'list-group',
    props.flush ? 'list-group-flush' : null,
    props.numbered ? 'list-group-numbered' : null,
    props.horizontal ? 'list-group-horizontal' : null,
  ]
})
</script>
