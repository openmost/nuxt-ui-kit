<template>
  <div :class="tabPaneClass"
       :id="id"
       :role="role"
       :aria-labelledby="ariaLabelledby"
       tabindex="0">
    <slot/>
  </div>
</template>

<script setup>
import {computed} from "@vue/runtime-core";

const props = defineProps({
  active: {
    type: Boolean,
    default: false
  },
  ariaLabelledby: {
    type: String,
  },
  fade: {
    type: Boolean,
    default: false
  },
  id: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'tabpanel'
  },
  show: {
    type: Boolean,
    default: false
  },
})

const tabPaneClass = computed(() => {
  return [
    'tab-pane',
    props.fade ? 'fade' : null,
    props.show ? 'show' : null,
    props.active ? 'active' : null,
  ]
})
</script>
