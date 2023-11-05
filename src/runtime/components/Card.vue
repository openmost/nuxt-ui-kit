<template>
  <div class="card">
    <div class="card-header" v-if="$slots.header">
      <slot name="header"/>
    </div>
    <div class="card-body" v-if="!noBody">
      <slot/>
    </div>
    <slot v-else/>
    <div class="card-footer" v-if="$slots.footer">
      <slot name="header"/>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  noBody: {
    type: Boolean,
    default: false
  }
})
</script>
