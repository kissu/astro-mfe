import { fileURLToPath, URL } from 'node:url'
import { resolve } from "path";

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  preview: {
    port: 7400,
    open: true,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    target: "esnext",
    rollupOptions: {
      input: resolve(__dirname, "src/App.vue"),
      preserveEntrySignatures: "exports-only",
      external: ["vue"],
      output: {
        entryFileNames: "bundle.js",
        format: "esm",
      },
    },
  },
})
