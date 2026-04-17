import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://code2art.github.io',
  base: '/',
  // 這裡只留 react，不要有 tailwind()
  integrations: [react()], 
  vite: {
    plugins: [tailwindcss()],
  },
});