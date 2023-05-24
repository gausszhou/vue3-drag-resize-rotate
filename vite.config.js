import { resolve } from 'path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

console.log(process.env.NODE_ENV)

export default defineConfig({
    plugins: [vue()],
    publicDir: process.env.NODE_ENV === 'development' ? 'public' : '/',
    build: {
        target: ['es2020'],
        outDir: 'lib',
        lib: {
            formats: ['esm'],
            fileName: 'bundle',
            name: 'bundle',
            // Could also be a dictionary or array of multiple entry points
            entry: resolve(__dirname, 'src/index.js'),
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ['vue'],
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    vue: 'Vue',
                },
                assetFileNames: (assetInfo) => assetInfo.name === 'style.css' ? 'bundle.esm.css' : assetInfo.name
            },


        },

    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})