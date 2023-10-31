<template>
    <span>
      {{ result }}
    </span>
  </template>
  
  <script setup lang="ts">
  const { global: { variables } } = useAppConfig()
  
  const props = defineProps({
    id: {
      type: String,
      required: true,
    },
  })
  
  const result = computed(() => {
      let res = (variables as any)[props.id]
      // Check if variables contains ${} syntax
      if (res.includes('${')) {   
          // Replace ${} with the value from the variables object
          const regex = /\${(.*?)}/g
          const matches = res.match(regex)
          matches?.forEach((match: any) => {
              const key = match.replace('${', '').replace('}', '')
              res = res.replace(match, (variables as any)[key])
          })
      }
  
      return res
  })
  </script>
  
  