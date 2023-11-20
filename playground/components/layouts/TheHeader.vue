<template>
  <AppHeader>

    <template #brand>
      <LogoToolkitCombinationWhite/>
    </template>

    <template #actions>

      <FormGroup label="Instance" label-for="instances-selector" floating>
        <FormSelect style="width:250px"/>
      </FormGroup>

      <FormGroup label="Site" label-for="sites-selector" floating>
        <FormSelect style="width:250px"/>
      </FormGroup>

    </template>
  </AppHeader>
</template>
