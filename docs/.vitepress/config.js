import enSidebar from './locales/en/sidebar.js'
import zhSidebar from './locales/zh/sidebar.js'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Drag Rotate Resize",
  description: "Component Library for Vue3",
  locales: {
    root: {
      label: 'English',
      lang: 'en-US'
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN'
    }
  },
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../', import.meta.url)),
        '@root': fileURLToPath(new URL('../../', import.meta.url)),
        '@assets': fileURLToPath(new URL('../src/assets', import.meta.url))
      }
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },

    ],
    sidebar: {
      '/': enSidebar,
      '/zh/': zhSidebar
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
  }
})
