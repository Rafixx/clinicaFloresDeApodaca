import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"

import robotsTxt from "astro-robots-txt"

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), robotsTxt()],
  site: 'https://www.clinicafloresdeapodaca.com/',
  // base: '/dist/',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'fr', 'de'],
    routing: {
      prefixDefaultLocale: false
    },
    fallback: {
      en: 'es',
      fr: 'es',
      de: 'es',
    }
  }
})
