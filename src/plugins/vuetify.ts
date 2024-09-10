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

const vuetify = createVuetify({
  components: {
    ...components,
    ...labsComponents,
  },
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        colors: {
          background: '#1A1423',
          accent: '#A49694',
          primary: '#5DD39E',
          hover: '#3A8965',
          secondary: '#348AA7',
          secondaryHover: '#2D738A',
          error: '#CF6679',
          success: '#3A8965',
          warning: '#BCE784',
        }
      },
    },
  },

  aliases: {
    VBtnLarge: components.VBtn,
    VSection: components.VContainer,
    VPage: components.VContainer,
    VView: components.VContainer
  },

  defaults: {
    VView: {
      style: [
        {
          paddingTop: '45dvh',
          minHeight: '100dvh'
        }
      ]
    },
    VPage: {
      style: [
        {
          height: 'auto',
          width: 'auto'
        }
      ]
    },
    VSection: {
      style: [
        {
          marginBottom: '1rem',
        }
      ]
    },
    VContainer: {
      style: [
        {
          height: 'auto',
          maxWidth: '100%',
          margin: 0,
          padding: 0
        }
      ]
    },
    VChip: {
      style: [
        {
          margin: '0.1rem',
        }
      ]
    },
    VTextField: {
      color: 'primary',
      density: 'compact',
      variant: 'outlined'
    },
    VCheckbox: {
      style: 'textTransform: "capitalize";',
      density: 'compact'
    },
    VBtn: {
      style: 'margin-bottom: 0.5rem;',
      color: 'primary',
      variant: 'outlined',
    },
    VBtnLarge: {
      style: 'margin-bottom: 0.5rem;',
      color: 'primary',
      size: 'x-large',
      variant: 'outlined',
    }
  },
})

export default vuetify