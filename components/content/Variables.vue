<template>
    <span>
      {{ result }}
    </span>
  </template>
  
  <script setup lang="ts">
  const { variables } = useAppConfig()
  
  const props = defineProps({
    id: {
      type: String,
      required: true,
    },
  })
  
  const result = computed(() => {
      let res = variables[props.id]
      // Check if variables contains ${} syntax
      if (res.includes('${')) {   
          // Replace ${} with the value from the variables object
          const regex = /\${(.*?)}/g
          const matches = res.match(regex)
          matches?.forEach((match) => {
              const key = match.replace('${', '').replace('}', '')
              res = res.replace(match, variables[key])
          })
      }
  
      return res
  })
  </script>
  
  