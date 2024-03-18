/*
Este middleware destinado a la autenticación de la aplicación, toda la seguridad de rutas públicas, privadas y guest.
*/

export default defineNuxtRouteMiddleware(async (to) => {
	const { $auth } = useNuxtApp()
	const config = useRuntimeConfig()
	const authToken = useCookie(config.public.auth.cookieToken)

	const { path, meta, fullPath } = to

	if (path === '/logout') return

	const cookieToken = useCookie(authToken.value)
	const cookieRedirect = useCookie(authToken.value)

	// Si no hay token
	if (!cookieToken.value) {
		if (meta.auth !== 'guest') {
			cookieRedirect.value = fullPath
		}

		if (meta.auth === 'guest') return
		return navigateTo(`/login`)
	}

	// Guardamos el token en el store
	$auth.addAuthToken(cookieToken.value)

	if ($auth.user === null) {
		const { success } = await $auth.fetchMe()

		// Si falla mandamos al login
		if (!success) {
			$auth.removeAuthToken()
			return navigateTo(`/login`)
		}
	}

	// Si son rutas guest redirigimos al home
	if (meta.auth === 'guest') {
		return navigateTo(`/`)
	}
})
