import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { sveltePreprocess } from 'svelte-preprocess';

export default defineConfig({
  plugins: [
    svelte({ preprocess: sveltePreprocess() })
  ],
  server: {
    open: '/test/index.html'
  },
  build: {
    sourcemap: true,
    lib: {
      entry: './src/index.ts',
      name: 'AnnotoriousTools',
      formats: ['es', 'umd'],
      fileName: (format) => 
        format === 'umd' ? `annotorious-plugin-tools.js` : `annotorious-plugin-tools.es.js` 
    },
    rollupOptions: {
      output: {
        assetFileNames: 'annotorious-plugin-tools.[ext]'
      }
    }
  }
});