<template>
  <component
      :is="listGroupItemTag"
      :activeClass="activeClass"
      :class="listGroupItemClass"
      :href="href"
      :to="to">
    <slot/>
  </component>
</template>

<script setup>
import {computed} from "vue";

const props = defineProps({
  activeClass: {
    type: String,
  },
  button: {
    type: Boolean,
    default: false,
  },
  href: {
    type: String,
  },
  tag: {
    type: String,
    default: 'div',
  },
  to: {
    type: [String, Object],
  }
});

const listGroupItemTag = computed(() => props.button ? 'button' : (props.to ? resolveComponent('NuxtLink') : props.tag))
const listGroupItemClass = computed(() => {
  return [
    'list-group-item',
  ]
})


</script>
