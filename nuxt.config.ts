export default defineNuxtConfig({

  app: {
    head: {
      script: [
        {
          src: "https://analytics.hrcd.fr/js/script.js",
          defer: true,
          "data-domain": "foliomagazine.johanncvl.com",
        },
      ],
    },
  },
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
    preference: "light",
    fallback: "light",
    classSuffix: '',
    storageKey: "nuxt-starter-color-mode",
  },

  devtools: { enabled: true },

  svgo: {
    autoImportPath: "./assets/logo/",
  },
})