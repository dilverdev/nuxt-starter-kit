/*
Este middleware tiene como único trabajo es remover el slash final de las urls.
*/

export default defineNuxtRouteMiddleware((to) => {
	if (to.path !== '/' && to.path.slice(-1) === '/') {
		return navigateTo({ ...to, path: to.path.slice(0, -1) }, { redirectCode: 301 })
	}
})
