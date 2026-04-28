// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  target: 'static',
  app: {
    baseURL: 'fullstomic-profile.github.io',
    buildAssetsDir: 'assets',
  },
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    plugins: [
      // @ts-expect-error
      vuetify({ autoImport: true }),
    ],
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
