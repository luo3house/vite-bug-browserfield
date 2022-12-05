import {defineConfig} from 'rollup'
import nodeResolve from '@rollup/plugin-node-resolve'

export default defineConfig({
    input: 'main.js',
    output: {
        format: 'iife',
        name: 'main',
        file: 'dist/index.js',
    },
    plugins: [
        nodeResolve({browser: true})
    ]
})