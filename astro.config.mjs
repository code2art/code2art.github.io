import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // 必須與你的 GitHub Pages 地址完全一致
  site: 'https://code2art.github.io',
  base: '/', 
  vite: {
    plugins: [tailwindcss()],
  },
});