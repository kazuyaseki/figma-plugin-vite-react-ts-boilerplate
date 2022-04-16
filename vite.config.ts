import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteSingleFile()],
  build: {
    rollupOptions: {
      input: {
        ui: resolve(__dirname, 'ui.html'),
        code: resolve(__dirname, 'src/code.ts'),
      },
      output: {
        entryFileNames: '[name].js',
      },
    },
  },
});
