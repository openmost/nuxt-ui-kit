<template>
  <component
    aria-label="ariaLabel"
    :class="buttonClass"
    :disabled="disabled"
    :rel="rel"
    :is="tag"
    :type="type"
  >
    <slot>{{ text }}</slot>
  </component>
</template>

<script setup>
import {defineProps, computed} from "@vue/runtime-core";

const props = defineProps({
  ariaLabel: {
    type: String
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  rel: {
    type: String,
    default: null,
  },
  size: {
    type: String,
    default: ''
  },
  tag: {
    type: String,
    default: 'button',
  },
  text: {
    type: String,
  },
  type: {
    type: String,
    default: 'button',
  },
  variant: {
    type: String,
    default: 'secondary'
  },
})

const buttonClass = computed(() => {
  return [
    'btn',
    props.size ? `btn-${props.size}` : null,
    props.variant ? `btn-${props.variant}` : null,
  ]
})
</script>
