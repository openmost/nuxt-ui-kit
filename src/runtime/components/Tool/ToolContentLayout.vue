<template>
  <div id="tool-content-layout" class="container">

    <StickyWrapper v-if="$slots.menu">
      <div class="tool-menu">
        <slot name="menu"/>
      </div>
    </StickyWrapper>

    <main class="tool-content">
      <slot/>
    </main>

    <StickyWrapper v-if="$slots.output">
      <div class="tool-output">
        <slot name="output"/>
      </div>
    </StickyWrapper>

  </div>
</template>

<style lang="scss">
#tool-content-layout {
  min-height: calc(100vh - 148px);
  padding-top: 132px;
  display: flex;
  gap: 80px;

  .tool-menu,
  .tool-content,
  .tool-output {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }

  .tool-menu {
    flex-basis: 270px;
    max-width: 270px;
    min-width: 270px;
  }

  .tool-content {
    flex-basis: 605px;
    max-width: 605px;
    flex-grow: 1;
  }

  .tool-output {
    flex-basis: 485px;
    max-width: 485px;
  }
}
</style>
