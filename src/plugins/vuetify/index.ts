/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'

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
    VSection: components.VContainer
  },

  defaults: {
    VSection: {
      style: [
        {
          display: 'flex',
          padding: '1rem',
          marginBottom: '1rem',
          alignContent: 'center',
          justifyContent: 'center',
          height: '100dvh',
          maxHeight: '100dvh'
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

