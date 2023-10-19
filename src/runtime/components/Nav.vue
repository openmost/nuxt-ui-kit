<template>
  <component
    :is="tag"
    :class="navClass"
    role="navigation">
    <slot/>
  </component>
</template>

<script setup>
import {defineProps, computed} from "@vue/runtime-core";

const props = defineProps({
  fill: {
    type: Boolean,
  },
  justified: {
    type: Boolean,
  },
  pills: {
    type: Boolean,
  },
  tabs: {
    type: Boolean,
  },
  tag: {
    type: String,
    default: 'ul',
  },
  underline: {
    type: Boolean,
  },
  vertical: {
    type: Boolean,
  }
});

const navClass = computed(() => {
  return [
    'nav',
    props.fill ? 'nav-fill' : null,
    props.justified ? 'nav-justified' : null,
    props.vertical ? 'flex-column' : null,
    props.tabs ? 'nav-tabs' : null,
    props.pills ? 'nav-pills' : null,
    props.underline ? 'nav-underline' : null,
  ]
})


</script>

<style lang="scss">
.nav {
  gap: 1rem;
}
</style>
