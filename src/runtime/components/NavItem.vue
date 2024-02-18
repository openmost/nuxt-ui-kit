<template>
  <li :class="navItemClass">

    <NavLink
      v-if="to || href"
      :href="href"
      :to="to"
      :external="external"
      :active="active"
      :activeClass="activeClass"
      :exactActive="exactActive"
      :exactActiveClass="exactActiveClass"
      :disabled="disabled"
      :neverActive="neverActive"
    >

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
  exactActive: {
    type: Boolean
  },
  exactActiveClass: {
    type: String,
    default: 'active-exact'
  },
  disabled: {
    type: Boolean
  },
  href: {
    type: [String, Object],
  },
  to: {
    type: [String, Object],
  },
  external: {
    type: Boolean,
    default: false
  },
  neverActive: {
    type: Boolean,
  }
})

const navItemClass = computed(() => {
  return [
    'nav-item',
    !props.neverActive && props.active ? props.activeClass : null,
    !props.neverActive && props.exactActive ? props.exactActiveClass : null,
    props.neverActive ? 'never-active': null,
  ]
})
</script>
