<template>
  <component
    aria-label="ariaLabel"
    :class="buttonClass"
    :disabled="disabled"
    :rel="rel"
    :is="tag"
    :type="type"
  >

    <slot name="icon"/>

    <slot>{{ text }}</slot>

  </component>
</template>

<script setup>
import {defineProps, computed} from "@vue/runtime-core";

const props = defineProps({
  ariaLabel: {
    type: String
  },
  circle: {
    type: Boolean,
  },
  disabled: {
    type: Boolean,
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
    props.circle ? `btn-circle` : null,
  ]
})
</script>

<style lang="scss">
.btn {
  display: flex;
  align-items: center;
  align-content: center;
  gap: .5rem;

  svg {
    width: 1.125rem;
    height: 1.125rem;
  }


  &[disabled] {
    background-color: transparent;
    color: var(--bs-secondary);
    border-color: currentColor;
  }

  &.btn-danger {
    color: #fff;
  }

  &.btn-circle {
    justify-content: center;
    padding: 10px;
    border-radius: 50rem;
    aspect-ratio: 1;
  }
}
</style>
