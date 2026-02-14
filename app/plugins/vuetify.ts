import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
// @ts-ignore
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: false,
  })
  nuxtApp.vueApp.use(vuetify)
})
