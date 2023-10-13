<template>
  <header class="section-header">

    <h2>{{ title }}</h2>

    <ActionsWrapper v-if="$slots.actions">
      <slot name="actions"/>
    </ActionsWrapper>

  </header>
</template>

<script setup>
import {defineProps} from "@vue/runtime-core";

const props = defineProps({
  title: {
    type: String,
  }
})
</script>

<style lang="scss">
.section-header {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  margin-bottom: 2rem;
}
</style>
