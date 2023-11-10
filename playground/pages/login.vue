<template>
  <LayoutAuth>

    <h1>Use Toolkit to improve your capabilities</h1>

    <template #card>
      <AuthCard title="Welcome back on Matomo Toolkit" :description="description">

        <template #logo>
          <LogoToolkitCombinationWhite/>
        </template>

        <SignInWithOpenmost @click="signIn"/>

        <p>
          You don't have an Openmost account ?
          <NuxtLink to="https://accounts.openmost.io/register" rel="noopener nofollow" external>Sign up</NuxtLink>
        </p>

      </AuthCard>
    </template>
  </LayoutAuth>
</template>

<script setup>
import {useHead, definePageMeta} from '#imports';

useHead({title: 'XXXX by Openmost'})
definePageMeta({
  layout: 'blank'
})

const description = "Import, export and manage the different entities of your Matomo instances in just a few click. Openmost Tools is the Matomo management tool you’ve been waiting for."

function signIn() {
  alert('Sign in')
}
</script>
