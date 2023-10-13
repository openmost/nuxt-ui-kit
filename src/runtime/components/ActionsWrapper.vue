<template>
  <div class="actions-wrapper">
    <slot/>
  </div>
</template>

<style lang="scss">
.actions-wrapper {
  display: flex;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
}
</style>
