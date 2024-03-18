import hooks from './config/hooks'
import privateRuntimeConfig from './config/privateRuntimeConfig'
import publicRuntimeConfig from './config/publicRuntimeConfig'

export default defineNuxtConfig({
	telemetry: false,

	extends: [],

	devtools: {
		enabled: true,
	},

	runtimeConfig: {
		...privateRuntimeConfig,
		public: publicRuntimeConfig,
	},

	site: {
		// url: 'https://example.com',
		// name: 'My Site',
	},

	ssr: false,

	spaLoadingTemplate: './assets/screen-loader-spa.html',

	css: ['~/assets/css/style.css'],

	modules: ['@nuxt/ui', '@nuxt/image', '@nuxt/fonts', 'nuxt-og-image', '@vueuse/nuxt', '@pinia/nuxt'],

	hooks,
})
