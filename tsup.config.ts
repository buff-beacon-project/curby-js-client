import { defineConfig } from 'tsup'

const env = process.env.NODE_ENV

export default defineConfig({
  splitting: true,
  sourcemap: env === 'development',
  clean: true,
  dts: true,
  format: ['cjs', 'esm'],
  minify: false,
  bundle: true,
  skipNodeModulesBundle: true,
  entryPoints: ['src/index.ts'],
  watch: env === 'development',
  target: 'node16',
})