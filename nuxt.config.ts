export default defineNuxtConfig({
  css: ["~/assets/style/main.css"],

  runtimeConfig: {
    public: {},
    private: {
      resendApiKey: process.env.RESEND_API_KEY,
    },
  },

  ui: {
    icons: ['lucide'],
  },

  modules: ["@nuxt/fonts", "nuxt-svgo", "@nuxt/ui"],

  colorMode: {
    preference: "light",
    fallback: "light",
    classSuffix: '',
    storageKey: "nuxt-starter-color-mode",
  },

  devtools: { enabled: true },

  svgo: {
    autoImportPath: "./assets/logo/",
  },

  compatibilityDate: "2024-10-04",
})