<template>
  <header :class="appHeaderClass">

    <div :class="headerWrapperClass">

      <NuxtLink to="/" class="navbar-brand" v-if="$slots.brand">
        <slot name="brand"/>
      </NuxtLink>

      <slot/>

      <ActionsWrapper v-if="$slots.actions">
        <slot name="actions"/>
      </ActionsWrapper>

    </div>

  </header>
</template>


<script setup lang="ts">
import {computed} from "vue";

const props = defineProps({
  tool: {
    type: Boolean,
    default: false,
  }
})

const appHeaderClass = computed(() => {
  return [
    'app-header',
    props.tool ? 'app-header-tool' : null
  ]
})

const headerWrapperClass = computed(() => {
  return [
    'header-wrapper',
    props.tool ? 'container' : null
  ]
})
</script>


<style lang="scss">
.app-header {
  padding: 1rem 1.5rem;
  background-color: var(--bs-body-bg);

  &.app-header-tool {
    z-index: 10;
    position: fixed;
    width: 100%;
    border-bottom: 1px solid var(--bs-surface);

    .navbar-brand {
      padding-top: .5rem;
      padding-bottom: .5rem;

      svg {
        max-height: 34px;
        width: 100%;
      }
    }
  }

  .header-wrapper {
    display: flex;
  }

  .navbar-brand {
    line-height: normal;
    font-size: 1.6875rem;
    font-weight: 600;
    display: flex;
    gap: .5rem;
    align-items: center;
  }

  .actions-wrapper {
    flex-grow: 1;
    justify-content: flex-end;
  }
}
</style>
