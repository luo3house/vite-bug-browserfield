import {defineConfig} from 'vite'
export default defineConfig({
    build: {
        lib: {
            entry: 'main.js',
            name: 'main',
            formats: ['iife'],
            fileName: () => 'index.js',
        },
        outDir: 'dist/',
        minify: false,
    }
})