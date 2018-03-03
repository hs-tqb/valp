module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'ValPromise',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: 'val promise' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      // { src: '/js/platform.js' },
      { src: 'https://www.googletagmanager.com/gtag/js?id=UA-112778678-1' },
      { src: '/js/googletagmanager.js' },
      { src: 'http://code.jquery.com/jquery-1.7.2.min.js' },
      { src: '/alertifyjs/alertify.min.js' },
      // { src: '/js/init.js' },
    ],
  },
  css: [
    { src: '~assets/css/base.css' },
    { src: '~/static/alertifyjs/css/alertify.min.css' },
    { src: '~/static/alertifyjs/css/themes/default.min.css' },
    // { src: '~/static/alertifyjs/css/themes/semantic.min.css' },
    // { src: '~/static/alertifyjs/css/themes/bootstrap.min.css' },
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  // env: {
  //   CUS_ENV: process.env.CUS_ENV
  // },
  router: {
    // 在每页渲染前运行 middleware/user-agent.js 中间件的逻辑
    middleware: ['parseLang', 'parsePlatf', 'redirectionForOldRouter']
  },
  build: {
    /*
    ** Run ESLint on save
    */
    // extend (config, ctx) {
    //   if (ctx.dev && ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  }
}
