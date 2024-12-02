import withNuxt from './.nuxt/eslint.config.mjs'
import antfu from '@antfu/eslint-config'

export default withNuxt(
  // Your custom configs here
  antfu({
    vue:true
  })
)
