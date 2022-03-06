const r = require.context('./', true, /^\.\/.+\/.+\.ts$/)
const modules: Record<string, any> = {}

r.keys().forEach((key: string) => {
  const moudleName = key.substring(
    key.lastIndexOf('/') + 1,
    key.lastIndexOf('.')
  )
  modules[moudleName] = r(key as keyof typeof r).default
})

export default modules
