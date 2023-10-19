<template>
  <div class="dropdown">
    <slot name="toggler">
      <Button
        :class="dropdownToggleClass"
        :aria-expanded="open ? 'true' : 'false'"
        :aria-label="toggleText"
        tag="tag"
        type="button"
        :variant="variant"
        @click="onClick"
      >
        {{ text }}
      </Button>
    </slot>
    <ul :class="dropdownMenuClass">
      <slot>
        <DropdownItem>Action</DropdownItem>
        <DropdownItem>Another action</DropdownItem>
        <DropdownItem>Something else here</DropdownItem>
      </slot>
    </ul>
  </div>
</template>

<script setup>
import {defineProps, computed, ref} from "@vue/runtime-core";

const props = defineProps({
  id: {
    type: String,
    default: 'dropdown'
  },
  text: {
    type: String,
  },
  toggleTag: {
    type: String,
    default: 'button',
  },
  toggleText: {
    type: String,
  },
  variant: {
    type: String,
    default: 'secondary'
  }
})

const open = ref(false);

const dropdownToggleClass = computed(() => {
  return [
    'dropdown-toggle',
  ]
})

const dropdownMenuClass = computed(() => {
  return [
    'dropdown-menu',
    open.value ? 'show' : null,
  ]
})

function onClick() {
  return open.value = !open.value;
}
</script>
