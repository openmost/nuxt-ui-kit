<template>
  <div class="invalid-feedback" :id="id" :role="role">
    <slot/>
  </div>
</template>

<script setup>
const props = defineProps({
  id: {
    type: String,
  },
  role: {
    type: String,
  },
});
</script>
