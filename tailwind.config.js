/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        '{./pages/,./pages/**/}.{js,vue,ts}',
        '{./components/,./components/**/}.{js,vue,ts}',
        '{./layouts/,./layouts/**/}.{js,vue,ts}',
        '{./plugins/,./plugins/**/}.{js,vue,ts}',
        '{./composables/,./composables/**/}.{js,vue,ts}',
        './nuxt.config.{js,ts}',
    ],
    theme: {
        extend: {},
    },
    plugins: [require('@tailwindcss/typography')],
}
