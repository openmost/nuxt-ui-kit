<template>
  <component :is="tag" :class="spinnerClass" :role="role" :style="spinnerStyle">
    <span class="visually-hidden" v-text="label"></span>
  </component>
</template>

<script setup>
import {computed} from "@vue/runtime-core";

const props = defineProps({
  label: {
    type: String,
    default: 'Loading...',
  },
  role: {
    type: String,
    default: 'status',
  },
  small: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
  },
  tag: {
    type: String,
    default: 'span',
  },
  type: {
    type: String,
    default: 'border',
  },
  variant: {
    type: String,
  }
})

const spinnerClass = computed(() => {
  return [
    `spinner-${props.type}`,
    props.variant ? `text-${props.variant}` : null,
    props.small ? `spinner-${props.type}-sm` : null,
  ]
})

const spinnerStyle = computed(() => {
  return [
      props.size && !props.small ? `width: ${props.size}; height: ${props.size}` : null,
  ]
});
</script>
