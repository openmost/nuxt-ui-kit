<template>
  <div class="auth-layout">

    <div class="content-wrapper">
      <slot/>
    </div>

    <slot name="card"/>

  </div>
</template>

<style lang="scss">
.auth-layout {
  background-color: #1B2383;
  padding: 50px;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;

  .content-wrapper {
    margin-left: 150px;
    max-width: 650px;
  }
}
</style>
