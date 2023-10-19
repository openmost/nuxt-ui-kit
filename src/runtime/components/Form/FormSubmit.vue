<template>
  <Button type="submit" :variant="variant">
    <slot/>
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
