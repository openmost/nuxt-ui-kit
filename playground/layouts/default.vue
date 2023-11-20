<template>
  <div class="default-layout">

      <LayoutsTheHeader/>

      <div id="content-wrapper">

          <LayoutsTheSidebar/>
          <main id="content">
            <div class="view-wrapper">
              <slot/>
            </div>
          </main>

      </div>

  </div>
</template>


<style lang="scss">
.default-layout {

  #content-wrapper {
    display: flex;
    max-width: 100vw;
    padding-top: 2.5rem;

    #content {
      flex-grow: 1;
      max-width: calc(100vw - 329px);
      padding-bottom: 1.5rem;
      padding-right: 1.5rem;
    }
  }
}
</style>
