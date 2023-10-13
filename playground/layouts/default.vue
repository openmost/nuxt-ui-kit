<template>
  <div class="default-layout">

    <Sidebar>

      <template #logo>
        <h1>Logo</h1>
      </template>

      <Nav pills vertical>
        <NavItem to="/" active>AB Testing</NavItem>
        <NavItem to="/">Annotations</NavItem>
        <NavItem to="/">Custom Alert</NavItem>
        <NavItem to="/">Custom Dimensions</NavItem>
        <NavItem to="/">Dashboard</NavItem>
        <NavItem to="/">Forms</NavItem>
      </Nav>
    </Sidebar>

    <main id="content">
      <slot/>
    </main>

  </div>
</template>

<style lang="scss">
.default-layout {
  display: flex;
}

#content {
  flex-grow: 1;
  padding-right: 1.5rem;
}
</style>
