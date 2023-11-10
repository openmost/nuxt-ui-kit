<template>
  <div class="default-layout">
    <Header/>
    <div id="content-wrapper">
      <Sidebar/>
      <main id="content">
        <slot/>
      </main>
    </div>
  </div>
</template>


<style lang="scss">
.default-layout {

  #content-wrapper {
    display: flex;
  }

  #content {
    flex-grow: 1;
    padding-right: 1.5rem;
  }
}
</style>
