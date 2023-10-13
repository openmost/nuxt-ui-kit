<template>
  <div id="id" :class="sidebarClass">

    <div class="sidebar-logo" v-if="$slots.logo">
      <slot name="logo"/>
    </div>

    <slot/>

    <slot name="end"/>

  </div>
</template>

<script setup>
import {defineProps, computed} from '@vue/runtime-core';

const props = defineProps({
  id: {
    type: String,
    default: 'sidebar'
  }
})

const sidebarClass = computed(() => {
  return [
    'sidebar'
  ]
})
</script>

<style lang="scss">
.sidebar {
  min-width: 312px;
  padding: 2rem 1.5rem;

  .sidebar-logo {
    margin-bottom: 50px;
  }
}
</style>
