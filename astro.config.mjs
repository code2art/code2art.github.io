import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'; // 確保這行存在
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://code2art.github.io',
  base: '/',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});

