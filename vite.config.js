/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';
import legacy from '@vitejs/plugin-legacy';
import path from 'path';
import { fileURLToPath } from 'url';
import { visualizer } from 'rollup-plugin-visualizer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    ViteImageOptimizer({
      webp: {
        lossless: false,
        quality: 75,
      },
      avif: false,
    }),
    visualizer({
      open: true,
      filename: './dist/report.html',
    }),
    viteTsconfigPaths(),
    svgrPlugin(),
    legacy({
      targets: ['edge >= 87', 'chrome >= 90'],
      modernPolyfills: true,
    }),
    // viteCompression({
    //   algorithm: 'gzip',
    //   ext: '.gz',
    // }),
    // viteCompression({
    //   algorithm: 'brotliCompress',
    //   ext: '.br',
    // }),
  ],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@layout': path.resolve(__dirname, 'src/layout'),
      '@apis': path.resolve(__dirname, 'src/apis'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@common': path.resolve(__dirname, 'src/common'),
      '@mocks': path.resolve(__dirname, 'src/mocks'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.js'],
    css: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('gsap') || id.includes('framer-motion')) {
            return 'animation';
          }
          if (id.includes('sweetalert2')) {
            return 'sweetalert2';
          }
          if (id.includes('lottie-react')) {
            return 'lottie-react';
          }
          if (id.includes('emotion')) {
            return 'emotion';
          }
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
});
