<template>
  <NuxtLink
    :class="navLinkClass"
    :disabled="disabled"
    :to="to"
  >
    <slot/>
  </NuxtLink>
</template>

<script setup>
import {defineProps, computed} from "@vue/runtime-core";

const props = defineProps({
  active: {
    type: Boolean,
  },
  disabled: {
    type: Boolean,
  },
  to: {
    type: String,
  }
})

const navLinkClass = computed(() => {
  return [
    'nav-link',
    props.active ? 'active' : false
  ];
})
</script>
