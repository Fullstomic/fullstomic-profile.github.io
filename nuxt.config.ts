// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  target: 'static',
  ssr: false,
  app: {
    baseURL: '/fullstomic-profile.github.io/',
    buildAssetsDir: 'assets',
  },
  generate: {
    dir: 'docs',
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
  nitro: {
    prerender: {
      exclude: [
        '/contact/portfolio',
        '/contact/contact',
        '/contact/news',
        '/contact/about',
      ],
    },
  },
})
