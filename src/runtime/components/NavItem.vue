<template>
  <li :class="navItemClass">

    <NavLink
      v-if="to"
      :to="to"
      :external="external"
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
import {computed} from "vue";

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
    type: [String, Object],
  },
  external: {
    type: Boolean,
    default: false
  }
})

const navItemClass = computed(() => {
  return [
    'nav-item',
    props.active ? props.activeClass : null,
  ]
})
</script>
