import path from 'path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(async () => ({
    plugins: [react()],

    // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
    //
    // 1. prevent vite from obscuring rust errors
    clearScreen: false,
    // 2. tauri expects a fixed port, fail if that port is not available
    server: {
        port: 3000,
        strictPort: true,
        watch: {
            // 3. tell vite to ignore watching `src-tauri`
            ignored: ['**/src-tauri/**'],
        },
    },
    build: {
        outDir: path.join(__dirname, 'build'),
        minify: true,
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@ui': path.resolve(__dirname, './src/components'),
            '@components': path.resolve(__dirname, './src/components'),
            '@typings': path.resolve(__dirname, './src/typings/*'),
            '@theme': path.resolve(__dirname, './src/config/theme'),
            '@hooks': path.resolve(__dirname, './src/hooks/index'),
        },
    },
}));
