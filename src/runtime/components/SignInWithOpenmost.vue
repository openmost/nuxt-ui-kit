<template>
  <Button size="" variant="white" class="sign-in-with-openmost" id="sign-in-with-openmost">
    <template #icon>
      <LogoOpenmost/>
    </template>

    Sign in with Openmost
  </Button>
</template>

<style lang="scss">
.sign-in-with-openmost {
  font-weight: 500;
  gap: 14px;
  padding: 22px 26px;
  border-radius: .75rem;

  svg {
    width: 19px;
    height: 19px;
  }
}
</style>
