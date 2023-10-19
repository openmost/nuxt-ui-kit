<template>
  <div class="tool-output-card">
    <div v-if="title"
         class="tool-output-card-header"
    >
      <h2 class="h4 tool-output-card-title"
          v-text="title"
      ></h2>
      <ActionsWrapper v-if="$slots.actions">
        <slot name="actions" />
      </ActionsWrapper>
    </div>
    <slot/>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: ''
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
