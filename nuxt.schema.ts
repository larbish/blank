// nuxt.schema.ts
import { field } from '@nuxthq/studio/theme'

export default defineNuxtSchema({
  appConfig: {
    global: {
      $schema: {
        title: 'Global',
        description: 'Global configuration',
        tags: ['@studioIcon i-mdi-earth']
       },
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
