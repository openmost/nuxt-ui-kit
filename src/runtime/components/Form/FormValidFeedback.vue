<template>
  <div class="valid-feedback" :id="id" :role="role">
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
