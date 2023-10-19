<template>
  <li>
    <a :class="dropdownItemClass">
      <slot/>
    </a>
  </li>
</template>

<script setup>
import {computed} from "vue";

const props = defineProps({
  active: {
    type: Boolean,
    default: false
  }
})

const dropdownItemClass = computed(() => {
  return [
    'dropdown-item',
  ]
})
</script>
