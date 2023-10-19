<template>
  <td  role="cell"
      :class="tdClass"
      :colspan="colspan"
      :rowspan="rowspan"
  >
    <slot/>
  </td>
</template>

<script setup>
import {computed} from "vue";

const props = defineProps({
  class: {
    type: [String, Array],
  },
  tdClass: {
    type: [String, Array],
  },
  variant: {
    type: String,
  },
  colspan: {
    type: [Number, String],
    default: null,
  },
  rowspan: {
    type: [Number, String],
    default: null,
  }
})

const tdClass = computed(() => {
  return [
    props.class,
    props.variant ? `bg-${props.variant}` : null,
    props.tdClass ? props.tdClass : null,
  ]
})
</script>
