export default defineNuxtRouteMiddleware((to) => {
    if (to.params.chapterSlug === '1-chapter-1') {
        return
    }
    return navigateTo('/login')
})