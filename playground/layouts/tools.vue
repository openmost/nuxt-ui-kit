<template>
  <div>

    <AppHeader tool>
      <template #brand>
        <LogoUrlBuilder/>
        <span>Matomo tracking HTTP API URL builder</span>
      </template>

      <template #actions>
        <ApplicationsManager/>
      </template>
    </AppHeader>

    <slot/>

    <ToolFooter/>

  </div>
</template>
