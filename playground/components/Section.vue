<template>
  <section class="py-5">
    <Container>

      <h1>{{ title }}</h1>

      <hr>

      <slot/>

    </Container>
  </section>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String
  }
})
</script>
