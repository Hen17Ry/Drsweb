// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY
    }
  },
  vite: {
    server: {
      allowedHosts: ['3354-81-91-231-198.ngrok-free.app'], // Remplace par ton URL ngrok
    }
  },
})
