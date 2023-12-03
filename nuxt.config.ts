// https://nuxt.com/docs/api/configuration/nuxt-config

import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  // app: {
  //   link: [
  //     { rel: "manifest", href: "/manifest.webmanifest" },
  //   ]
  // },
  devtools: { enabled: true },
  modules: ['@nuxt/image','@vite-pwa/nuxt'],
  pwa: {
    registerType: "autoUpdate",
    includeAssets: ["favicon.ico"],
    client: {
      installPrompt: true,
    },
    manifest: {
      name: 'name',
      description: "description",
      theme_color: "#ffffff",
      lang: "ja",
      short_name: "short_name",
      start_url: "/",
      display: "standalone",
      background_color: "#ffffff",
      icons: [
        {
          "src": "favicon.ico",
          "sizes": "72x72 96x96 128x128 256x256"
        },
      ]
    },
    workbox: {
      navigateFallback: null
    },
    devOptions: {
      enabled: true,
      type: "module"
    },
  },
})