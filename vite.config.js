import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    })
  ],
  server: {
    proxy: {
      '/api': {
        target: 'https://haruhan.site',  // 공백 제거 및 /api 제거
        changeOrigin: true,
        secure: true  // HTTPS 사용 시
      }
    }
  }
});
