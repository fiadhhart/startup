//later, we will modify this file to allow proxying of WebSocket requests as well

import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
});