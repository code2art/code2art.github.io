import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite'; // 根據你 package.json 的 v4 寫法
import react from '@astrojs/react';

export default defineConfig({
  // 換成你的 GitHub 網址
  site: 'https://code2art.github.io',
  base: '/', 
  integrations: [react()],
  vite: {
    plugins: [tailwind()],
  },
});