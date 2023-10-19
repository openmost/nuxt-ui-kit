<template>
  <Button variant="white" class="sign-in-with-openmost">
    <template #icon>
      <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.7998 0.899902H19.5998V13.6999H13.1998V7.29991H6.7998V0.899902Z" fill="#242C8F"/>
          <path d="M0.399902 7.2998H6.7999V13.6998H13.1999V20.0998H0.399902V7.2998Z" fill="#426CDA"/>
          <path d="M6.7999 7.29991L0.399902 7.29991C0.399903 3.76529 3.26528 0.899902 6.7999 0.899902L6.7999 7.29991Z" fill="#FFA32A"/>
          <path d="M13.2 13.6997H19.6C19.6 17.2343 16.7346 20.0997 13.2 20.0997V13.6997Z" fill="#F25F6F"/>
      </svg>
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
