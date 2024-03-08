export default defineNuxtConfig({
  css: ["~/assets/style/main.scss"],

  modules: ["@nuxtjs/color-mode", "@nuxtjs/tailwindcss"],

  colorMode: {
    preference: "system",
    fallback: "dark",
    classSuffix: '',
    storageKey: "nuxt-starter-color-mode",
  },

  devtools: { enabled: true }
})
