<template>
  <component :is="tag" :class="containerClass">
    <slot/>
  </component>
</template>

<script setup>
import {computed} from "vue";

const props = defineProps({
  fluid: {
    type: Boolean,
    default: false,
  },
  tag: {
    type: String,
    default: 'div',
  }
});

const containerClass = computed(() => {
  return [
    props.fluid ? 'container-fluid' : 'container'
  ];
})
</script>
