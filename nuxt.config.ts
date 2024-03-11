export default defineNuxtConfig({
  css: ["~/assets/style/main.scss"],

  runtimeConfig: {
    public: {},
    private: {
      resendApiKey: process.env.RESEND_API_KEY,
    },
  },

  ui: {
    icons: ['lucide'],
  },

  modules: ["@nuxt/fonts", "nuxt-svgo", "nuxt-mailer", "@nuxt/ui"],

  colorMode: {
    preference: "system",
    fallback: "dark",
    classSuffix: '',
    storageKey: "nuxt-starter-color-mode",
  },

  devtools: { enabled: true },

  svgo: {
    autoImportPath: "./assets/logo/",
  },
})