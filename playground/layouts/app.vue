<template>
  <div class="default-layout">
    <Sidebar/>
    <div id="content-wrapper">
      <Header/>
      <main id="content">
        <slot/>
      </main>
    </div>
  </div>
</template>

<style lang="scss">
.default-layout {
  display: flex;

  #content-wrapper {
    flex-grow: 1;
  }

  #content {
    padding-right: 1.5rem;
  }
}
</style>
