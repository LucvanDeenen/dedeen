/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import vuetify from './vuetify'
import router from './router'

// Types
import type { App } from 'vue'

// Fonts
async function loadFonts () {
  const webFontLoader = await import(/* webpackChunkName: "webfontloader" */'webfontloader')

  webFontLoader.load({
    google: {
      families: ['Roboto:100,300,400,500,700,900&display=swap'],
    },
  })
}

export function registerPlugins (app: App) {
  loadFonts()
  app
    .use(vuetify)
    .use(router)
}
