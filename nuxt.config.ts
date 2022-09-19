// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["assets/css/tailwind.css"],
  meta: {
    title: "Nuxt3 Course"
  },
 build: {
    postcss: {
    postcssOptions:{
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  }
  }
})
