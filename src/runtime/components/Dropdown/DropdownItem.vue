<template>
  <li>
    <a :class="dropdownItemClass">
      <slot/>
    </a>
  </li>
</template>

<script setup>
import {defineProps, computed} from "@vue/runtime-core";

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
