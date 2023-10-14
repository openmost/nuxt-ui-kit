<template>
  <component :is="tag" class="section-header">

    <div class="section-title-wrapper">
      <slot name="prepend"/>
      <component :is="titleTag" class="section-title">{{ title }}</component>
      <slot name="append"/>
    </div>

    <ActionsWrapper v-if="$slots.actions">
      <slot name="actions"/>
    </ActionsWrapper>

  </component>
</template>

<script setup>
import {defineProps} from "@vue/runtime-core";

const props = defineProps({
  tag: {
    type: String,
    default: 'header'
  },
  title: {
    type: String,
  },
  titleTag: {
    type: String,
    default: 'h2'
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

  .section-title-wrapper {
    display: flex;
    align-items: center;
    align-content: center;
    gap: .75rem;

    .section-title {
      margin-bottom: 0;
    }
  }
}
</style>
