<template>
  <NuxtLink
    :class="navLinkClass"
    :disabled="disabled"
    :to="to"
  >

    <slot name="icon"/>

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

<style lang="scss">
.nav-link {
  display: flex;
  gap: .75rem;
  align-content: center;
  align-items: center;

  &.active svg {
    color: var(--bs-accent);
  }
}

.nav.nav-pills {
  .nav-link:hover {
    background-color: rgba(255, 255, 255, .03);
  }
}
</style>

