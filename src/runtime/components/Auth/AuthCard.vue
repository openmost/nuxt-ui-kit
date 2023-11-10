<template>
  <div class="auth-card">

    <header class="auth-card-header">
      <div class="auth-card-logo">
        <slot name="logo"/>
      </div>

      <ApplicationsManager/>
    </header>

    <div class="auth-card-body">

      <h2 v-if="title" class="h2 auth-card-title">{{ title }}</h2>

      <p v-if="description" class="auth-card-description">{{ description }}</p>

      <slot/>

    </div>

    <footer class="auth-card-footer">
      <p>&copy;Openmost, all rights reserved</p>
    </footer>

  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'Welcome on this app'
  },
  description: {
    type: String,
    default: ''
  }
})
</script>

<style lang="scss">
.auth-card {
  padding: 50px 75px;
  background-color: var(--bs-body-bg);
  max-width: 635px;
  width: 100%;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
}

.auth-card-header {
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
}

.auth-card-body {
  margin-top: 2rem;
  margin-bottom: 2rem;

  h1 {
    margin-bottom: .5rem;
  }

  .auth-card-description {
    font-size: 1.125rem;
  }

  .sign-in-with-openmost {
    margin-top: 50px;
    margin-bottom: 50px;
  }

  p {
    color: var(--bs-secondary);
    font-weight: 300;

    a {
      color: #fff;
    }
  }
}

.auth-card-footer {
  color: var(--bs-secondary);
  font-weight: 300;
  font-size: 1rem;
}
</style>
