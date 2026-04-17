import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'; // 改用 vite 插件
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://code2art.github.io',
  base: '/',
  integrations: [react()], // 移除 tailwind() 整合
  vite: {
    plugins: [tailwindcss()], // 在這裡啟用 tailwind v4
  },
});