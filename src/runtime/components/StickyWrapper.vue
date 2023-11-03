<template>
  <div class="sticky-wrapper" :style="`top: ${top}px`">
    <slot/>
  </div>
</template>

<script setup>
const props = defineProps({
  top: {
    type: Number,
    default: 132
  }
})
</script>

<style lang="scss">
.sticky-wrapper {
  position: sticky;
  align-self: flex-start;
}
</style>
