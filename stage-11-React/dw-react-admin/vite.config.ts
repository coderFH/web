import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://apifoxmock.com/m1/2568825-1598557-default',
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
});
