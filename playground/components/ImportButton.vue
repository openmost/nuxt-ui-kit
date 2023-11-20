<template>
  <Button :variant="variant">
    <template #icon>
      <IconImport/>
    </template>
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
