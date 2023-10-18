<template>
  <div class="tool-output-card">

    <div class="tool-output-card-header" v-if="title">
      <h2 class="h4 tool-output-card-title" v-text="title"></h2>

      <ActionsWrapper v-if="$slots.actions">
        <slot name="actions"/>
      </ActionsWrapper>

    </div>

    <slot/>

  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String
  }
})
</script>

<style lang="scss">
.tool-output-card-header {
  margin-bottom: 1.5rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  .tool-output-card-title {
    margin-bottom: 0;
  }
}
</style>
