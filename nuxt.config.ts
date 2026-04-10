// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: 'cloudflare-pages'
  },
  
  runtimeConfig: {
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseKey: process.env.SUPABASE_KEY
  },
  ssr: true,
  app: {
    head: {
      title: 'MCQBox - Learn, and test your knowledge with multiple choice questions',
      meta: [
        { name: 'description', content: 'MCQBOX is a platform for creating and sharing multiple choice questions.' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { href: 'https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: '/home.css' },
        { rel: 'stylesheet', href: '/cate.css' },
        { rel: 'stylesheet', href: '/content.css' }


      ]
    }
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  components: [
    { path: '~/components', pathPrefix: false },
    { path: '~/components/home', pathPrefix: false },
    { path: '~/components/quiz', pathPrefix: false }
  ] 




})
