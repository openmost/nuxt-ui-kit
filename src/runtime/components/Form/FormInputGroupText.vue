<template>
  <component :is="tag" class="input-group-text">
    <slot/>
  </component>
</template>

<script setup>
const props = defineProps({
  tag: {
    type: String,
    default: 'div',
  }
})
</script>