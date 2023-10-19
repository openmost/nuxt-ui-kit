<template>
  <div class="position-sticky" :style="`top: 132px`">
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
