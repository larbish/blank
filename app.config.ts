export default defineAppConfig({
    global: {
        variables: {
          key1: "Key 1 value combined with ${key2}",
          key2: "Key 2 value",
          key3: "Key 3 value"
        }
    }
  })