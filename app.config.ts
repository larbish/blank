export default defineAppConfig({
    global: {
        variables: {
          key1: "Key1 value combined with ${key3}",
          key2: "Key 2 value",
          key3: "Key 3 value"
        }
    }
  })