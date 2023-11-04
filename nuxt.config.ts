// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path';
export default defineNuxtConfig({
    alias: {
        '@': resolve(__dirname, '/')
    },
    devtools: { enabled: true },
    modules: ['@nuxtjs/tailwindcss'],
    css: ['~/assets/css/base.css'],
    layout: {
        default: '~/layouts/default.vue',
        customerAuth: '~/layouts/customerAuth.vue',
    },
    head: {
        title: 'ilé.ée',
        meta: [
            { charset: 'UTF-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        ],
        link: [
            { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css' } // Lien pour importer les icônes Font Awesome
        ],

    }
})


