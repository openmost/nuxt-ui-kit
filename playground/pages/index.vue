<template>
  <section>
    <SectionHeader title="Alerts" previous-url="/">

      <template #append>
        55/120
      </template>

      <template #actions>
        <Button variant="primary">
          <template #icon>
            <IconExport/>
          </template>
          Export
        </Button>
        <Button variant="danger">
          <template #icon>
            <IconDelete/>
          </template>
          Delete
        </Button>
        <Button variant="primary">
          <template #icon>
            <IconImport/>
          </template>
          Import
        </Button>
      </template>
    </SectionHeader>

    <Alert variant="success" title="Nom alerte" show>
      <p>Lorem ipsum dolor sit amet consectetur. Elit.</p>
    </Alert>

    <Alert variant="info" title="Nom alerte" show dismissible>
      <p>Lorem ipsum dolor sit amet consectetur. Elit.</p>

      <template #actions>
        <Button variant="primary" to="/">View more link</Button>
        <Button variant="primary">View more click</Button>
        <NuxtLink to="/">Maybe Later</NuxtLink>
      </template>
    </Alert>

    <Alert variant="warning" title="Nom alerte" show>
      <p>Lorem ipsum dolor sit amet consectetur. Elit.</p>
    </Alert>

    <Alert variant="danger" title="Nom alerte" show>
      <p>Lorem ipsum dolor sit amet consectetur. Elit.</p>
    </Alert>

    <hr>

    <SignInWithOpenmost/>

  </section>
</template>

<script setup lang="ts">
</script>
