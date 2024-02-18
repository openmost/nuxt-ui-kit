export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        "data-bs-theme": "dark"
      }
    },
  },
  modules: ['../src/module'],
  openmostUiKit: {},
  devtools: {enabled: true},
  css: ["@/assets/scss/app.scss"]
})
