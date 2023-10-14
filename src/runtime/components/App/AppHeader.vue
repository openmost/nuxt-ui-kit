<template>
  <div class="app-header">

    <slot/>

    <ActionsWrapper v-if="$slots.actions">
      <slot name="actions"/>
    </ActionsWrapper>

  </div>
</template>

<style lang="scss">
.app-header {
  padding: 1rem 1.5rem;

  .actions-wrapper {
    flex-grow: 1;
    justify-content: flex-end;
  }
}
</style>
