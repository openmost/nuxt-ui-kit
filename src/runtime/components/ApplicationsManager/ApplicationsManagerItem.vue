<template>
  <div class="applications-manager-item">

    <slot name="logo"/>

    <NuxtLink class="stretched-link" :to="to" target="_blank" rel="nofollow noopener" external>{{ name }}</NuxtLink>

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
  position: relative;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: column;
  text-align: center;
  border-radius: 1rem;
  transition: .2s ease all;

  svg {
    width: 2rem;
    height: 2rem;
    display: block;
    margin: 10px;
    color: var(--bs-primary);
  }

  a {
    color: inherit;
    text-decoration: none;
    font-size: 1rem;
  }

  &:hover {
    background-color: var(--bs-body-bg);
  }
}
</style>
