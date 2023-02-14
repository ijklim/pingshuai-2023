// Migration Build: https://v3-migration.vuejs.org/migration-build.html#upgrade-workflow
// Environment variables: https://vitejs.dev/guide/env-and-mode.html
// Using environment variables in config: https://vitejs.dev/config/#using-environment-variables-in-config
import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    define: {
      __APP_ENV__: env.APP_ENV,
    },
    plugins: [
      vue({
        template: {
          compilerOptions: {
            compatConfig: {
              MODE: 3,
            },
          },
        },
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        vue: '@vue/compat',
      },
      extensions: ['.js', '.vue'],
    },
  }
})