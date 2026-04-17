// src/i18n/ui.ts
export const languages = {
  zh: '中文',
  en: 'English',
};

export const defaultLang = 'zh';

export const ui = {
  zh: {
    'nav.blog': '文章',
    'nav.podcast': '播客',
  },
  en: {
    'nav.blog': 'Articles',
    'nav.podcast': 'Podcast',
  },
} as const;