// nuxt.schema.ts
import { field } from '@nuxthq/studio/theme'

export default defineNuxtSchema({
  appConfig: {
    /**
     * Global configuration
     * @studioIcon i-mdi-earth
     */
    global: {
      variables: field({
        type: 'object',
        title: 'Variables',
        description: 'Key value variables to use in the Variables.vue component.',
        icon: 'i-mdi-variable',
        default: {}
      })
    }
  }
})
