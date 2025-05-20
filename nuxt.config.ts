// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/logo.ico' }
      ],
      meta: [
        { name: 'description', content: 'Découvrez DRS Guest House à Cotonou – Chambres de qualité, ambiance romantique, séjour détente ou professionnel.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#e63946' },

        // Open Graph pour Facebook
        { property: 'og:title', content: 'DRS Guest House' },
        { property: 'og:description', content: 'Hébergement élégant à Cotonou. Studio, garage, ambiance romantique et confort.' },
        { property: 'og:image', content: '/drs/1.jpg' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://drsweb.vercel.app' },

        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'DRS Guest House' },
        { name: 'twitter:description', content: 'Vivez une expérience inoubliable à Cotonou avec DRS.' },
        { name: 'twitter:image', content: '/drs/1.jpg' },
      ],
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/sitemap',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@pinia/nuxt',
  ],
  googleFonts: {
    families: {
      'Playfair+Display': {
        wght: [400, 500, 600, 700, 800]
      },
      'Montserrat': {
        wght: [300, 400, 500, 600, 700]
      },
      'Cormorant+Garamond': {
        wght: [300, 400, 500, 600, 700]
      }
    },
    display: 'swap'
  },
  
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
  css: [
     '~/assets/css/main.scss'
  ]  
})
