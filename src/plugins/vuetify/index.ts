/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as labsComponents from 'vuetify/labs/components'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  components: {
    ...components,
    ...labsComponents,
  },
  theme: {
    defaultTheme: 'dark',
    themes: {
      light: {
        colors: {
          primary: '#512DA8',
          secondary: '#1F1A24',
          background: '#212121',
          secondaryBackground: '#0288D1',
          selectable: '#1A237E',
          selected: '#3D5AFE',
          accent: '#757575',
        },
      },
      dark: {
        colors: {
          primary: '#512DA8',
          secondary: '#1F1A24',
          background: '#212121',
          secondaryBackground: '#311B92',
          selectable: '#1A237E',
          selected: '#37474F',
          accent: '#757575',
        }
      }
    },
  },
})
