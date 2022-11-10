export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'T-Movie',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'ant-design-vue/dist/antd.css',
    'swiper/css/swiper.css',
    // SCSS file in the project
    '~/assets/css/tailwind.css',
    '~/assets/css/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/antd-ui',
    '@/plugins/swiper'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Router configurations
  router: {
    middleware: [
      // 'auth'
      // 'authentication',
      // 'project',
    ]
  },


  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/postcss8',
    '@nuxtjs/color-mode',
    // '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  axios: {
    baseURL: process.env.API_BASE_URL || 'https://t-movies-api.herokuapp.com',
    // proxy: true
  },

  auth: {
    strategies: {
      local: {
        token: {
          property: 'accessToken',
          global: true,
          required: true,
          type: 'Bearer'
        },
        endpoints: {
          login: {
            url: '/api/auth/login',
            method: 'post',
            propertyName: 'accessToken',
          },
          user: {
            property: false,
            autoFetch: true
          },
        }
      },
      // watchLoggedIn: true,
      // redirect: {
      //   login: '/login',
      //   logout: '/',
      //   callback: '/login',
      //   home: '/'
      // }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  }
}
