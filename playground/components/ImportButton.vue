<template>
  <Button :variant="variant">
    <IconImport />
    <slot>Import</slot>
  </Button>
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
  }
})
</script>