<template>
  <div class="applications-manager-item">

    <slot name="logo"/>

    <NuxtLink :to="to" target="_blank" rel="nofollow noopener">{{ name }}</NuxtLink>

  </div>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    default: 'App name'
  },
  to: {
    type: String,
    default: 'https://openmost.io'
  }
})
</script>

<style lang="scss">
.applications-manager-item {
  width: 90px;
  height: 90px;
  padding: 10px;
}
</style>
