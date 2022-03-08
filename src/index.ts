const r = require.context('.', false, /(?<!index)\.ts$/)
const modules: Record<string, any> = {}

r.keys().forEach((key: string) => {
  const moudleName = key.substring(
    key.lastIndexOf('/') + 1,
    key.lastIndexOf('.')
  )
  const rKey = Object.keys(r(key))[0]
  modules[rKey] = r(key as keyof typeof r)[rKey]
})

export default modules
