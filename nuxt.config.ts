// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/',
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  nitro: {
    output: {
      dir: 'docs',
      publicDir: 'docs',
    },
  },
})
