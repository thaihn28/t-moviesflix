export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'T-Movie',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
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
    '@/plugins/repositories',
    '@/plugins/antd-ui',
    '@/plugins/swiper',
    '@/plugins/persistedState'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Router configurations
  router: {
    middleware: [
      // 'authenticated'
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
  //
  // axios: {
  //   baseURL: '/',
  //   proxy: true,
  //   credentials: false,
  //   retry: { retries: 3 },
  //   debug: true
  // },
  //
  // proxy: {
  //   '/api/': {
  //     target: process.env.API_BASE_URL,
  //     pathRewrite: { '^/api/': '' },
  //   }
  // },

  axios: {
    baseURL: process.env.API_BASE_URL || 'https://t-movies-api.herokuapp.com/',
    proxyHeaders: false,
    credentials: false,
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
            url: 'api/auth/login',
            method: 'POST',
            // propertyName: 'accessToken',
          },
          logout: {url: '/api/auth/logout', method: 'GET'},
          user: {
            url: 'api/auth/login',
            method: "GET",
            propertyName: 'data',
          },
        },
        user: {
          property: false, // set this to false if your user endpoint return user data directly
          autoFetch: false // set this to false if you are using setUser function
        }
      },
    },
    watchLoggedIn: true,
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/login',
      home: '/'
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
