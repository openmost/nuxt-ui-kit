<template>
  <li :class="navItemClass">

    <NavLink
      v-if="to"
      :to="to"
      :active="active"
      :disabled="disabled">

      <template #icon v-if="$slots.icon">
        <slot name="icon"/>
      </template>

      <slot/>
    </NavLink>

    <slot v-else/>

  </li>
</template>

<script setup>
import {defineProps, computed} from "@vue/runtime-core";

const props = defineProps({
  active: {
    type: Boolean
  },
  activeClass: {
    type: String,
    default: 'active'
  },
  disabled: {
    type: Boolean
  },
  to: {
    type: String,
  }
})

const navItemClass = computed(() => {
  return [
    'nav-item',
    props.active ? props.activeClass : null
  ]
})
</script>
