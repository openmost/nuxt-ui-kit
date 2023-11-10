<template>
  <AppHeader>

    <template #brand>
      <LogoToolkitCombinationWhite/>
    </template>

    <template #actions>
      <Nav pills>
        <NavItem to="/login">
          <template #icon>
            <IconLogout/>
          </template>
          Sign out
        </NavItem>
      </Nav>

      <ApplicationsManager/>
    </template>

  </AppHeader>
</template>
