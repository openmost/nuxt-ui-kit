<template>
  <div>

    <AppHeader tool>
      <template #brand>

        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17.0001 21.0347L17.0001 32.13L20.3661 32.13L20.3661 20.8666L28.2762 28.7678L30.8007 26.4142L23.0589 18.6811L33.8301 18.6811L33.8301 15.3189L22.7223 15.3189L30.6324 7.41766L28.2762 5.06411L20.3661 12.9653L20.3661 1.86999L17.0001 1.86999L17.0001 12.6291L17.0001 21.0347Z"
            fill="#426CDA"/>
          <path
            d="M10.9487 19.0024C12.1076 17.8496 12.1076 15.9804 10.9487 14.8276L4.92996 8.84022L7.15176 6.63L13.1705 12.6174C15.5565 14.9909 15.5565 18.8391 13.1705 21.2127L7.15176 27.2L4.92996 24.9898L10.9487 19.0024Z"
            fill="#426CDA"/>
          <path d="M14.6201 18.53H0.000117183V15.47L14.6201 15.47V18.53Z" fill="#426CDA"/>
        </svg>

        <span>Matomo tracking HTTP API URL builder</span>
      </template>

      <template #actions>
        <ApplicationsManager/>
      </template>
    </AppHeader>

    <ToolContentLayout>

      <template #menu>
        <span class="h4">Getting started</span>
      </template>

      <slot/>

      <template #output>
        Output
      </template>

    </ToolContentLayout>

    <ToolFooter/>

  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
#content {
  padding-top: 136px;
}
</style>
