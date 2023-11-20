<template>
  <AppSidebar>
    <Nav pills vertical>

      <NavItem v-for="tool in tools" :key="tool.name" :to="tool.path">
        <template #icon>
          <IconCustomDimension/>
        </template>
        {{ tool.label }}
      </NavItem>

    </Nav>
  </AppSidebar>
</template>

<script setup lang="ts">
import useTools from "~/composables/useTools";

const tools = useTools();
</script>
