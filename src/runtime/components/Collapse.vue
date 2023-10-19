<template>
  <component :is="tag" v-show="visible">
    <slot/>
  </component>
</template>

<script setup>
const props = defineProps({
  accordion: {
    type: String,
  },
  id: {
    type: String,
  },
  tag: {
    type: String,
    default: 'div',
  },
  visible: {
    type: Boolean,
    default: false,
  }
})
</script>