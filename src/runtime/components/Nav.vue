<template>
  <component
    :is="tag"
    :class="navClass"
    role="navigation">
    <slot/>
  </component>
</template>

<script setup>
import {computed} from "vue";

const props = defineProps({
  anchor: {
    type: Boolean,
    default: false,
  },
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
    props.anchor ? 'nav-anchor' : null,
  ]
})


</script>

<style lang="scss">
.nav {
  gap: 1rem;

  &.nav-pills {
    gap: .5rem;
  }

  &.nav-anchor {
    gap: .25rem;
  }
}
</style>
