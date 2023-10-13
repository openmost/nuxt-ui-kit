<template>
  <section>
    <SectionHeader title="Alerts">
      <template #actions>
        <Button variant="primary">Import</Button>
      </template>
    </SectionHeader>

    <Alert variant="success" title="Nom alerte" show>
      <p>Lorem ipsum dolor sit amet consectetur. Elit.</p>
    </Alert>

    <Alert variant="info" title="Nom alerte" show dismissible>
      <p>Lorem ipsum dolor sit amet consectetur. Elit.</p>

      <template #actions>
        <Button variant="primary" to="/">View more</Button>
        <a href="/">Maybe Later</a>
      </template>
    </Alert>

    <Alert variant="warning" title="Nom alerte" show>
      <p>Lorem ipsum dolor sit amet consectetur. Elit.</p>
    </Alert>

    <Alert variant="danger" title="Nom alerte" show>
      <p>Lorem ipsum dolor sit amet consectetur. Elit.</p>
    </Alert>

  </section>
</template>

<script setup lang="ts">
</script>
