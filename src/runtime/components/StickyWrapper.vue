<template>
  <div class="position-sticky" :style="`top: 132px`">
    <slot/>
  </div>
</template>

<script setup>
import {defineProps} from "@vue/runtime-core";

const props = defineProps({
  top: {
    type: Number,
    default: 132
  }
})
</script>
