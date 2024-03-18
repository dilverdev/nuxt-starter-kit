export default defineNuxtPlugin(({ provide }) => {
	const config = useRuntimeConfig()

	const $api = $fetch.create({
		baseURL: config.public.apiBaseUrl,
		onRequest() {
			// request interceptor
		},
		onResponse() {
			// response interceptor
		},
		onResponseError() {
			// response error interceptor
		},
	})

	provide('api', $api)
})
