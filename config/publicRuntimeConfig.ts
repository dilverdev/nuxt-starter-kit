export default {
	siteUrl: process.env.NUXT_SITE_URL || 'http://localhost:3030',
	apiBaseUrl: process.env.NUXT_API_BASE_URL || '/api',
	auth: {
		cookieToken: process.env.NUXT_AUTH_COOKIE_TOKEN || 'auth.app.token',
		cookieRedirect: process.env.NUXT_AUTH_COOKIE_REDIRECT || 'auth.app.redirect',
	},
	meta: {
		robots: process.env.NUXT_META_ROBOTS || 'none',
	},
}
