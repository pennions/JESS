import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: '/JESS/',
  build: {
    css: {
      preprocessorOptions: {
        less: {
          math: "always",
          relativeUrls: true,
          javascriptEnabled: true
        },
      },
    },
    outDir: "docs"
  },
  plugins: [vue()],
});
