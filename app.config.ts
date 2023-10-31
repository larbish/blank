export default defineAppConfig({
    global: {
        variables: {
          key1: "I use a sentence with ${key2}",
          key2: "Key 2 value"
        }
    }
  })