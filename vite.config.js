/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import viteTsconfigPaths from "vite-tsconfig-paths";
import svgrPlugin from "vite-plugin-svgr";
import legacy from "@vitejs/plugin-legacy";
import viteCompression from "vite-plugin-compression";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);


export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    ViteImageOptimizer({
      jpg: {
        quality: 80,
      },
      jpeg: {
        quality: 80,
        progressive: true,
        optimiseCoding: true
      },
      png: {
        quality: 80,
        strip: true,
        palette: true,
      },
      webp: {
        lossless: false,
        quality: 75,
      },
      avif: false,
    }),
    viteTsconfigPaths(),
    svgrPlugin(),
    legacy({
      targets: ["edge >= 87", "chrome >= 90"],
      modernPolyfills: true,
    }),
    viteCompression({
      algorithm: "gzip",
      ext: ".gz",
    }),
    viteCompression({
      algorithm: "brotliCompress",
      ext: ".br",
    }),
  ],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    }
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
        manualChunks: {
          'three-main': ['three'],
          'three-fiber': ['@react-three/fiber'],
          'three-drei': ['@react-three/drei'],
          'three-postprocessing': ['@react-three/postprocessing'],
          'three-rapier': ['@react-three/rapier']
        }
      }
    }
  },
  optimizeDeps: {
    include: ['three', '@react-three/fiber', '@react-three/drei', '@react-three/postprocessing', '@react-three/rapier']
  }
});
