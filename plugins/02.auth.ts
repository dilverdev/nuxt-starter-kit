import { useAuthStore } from '~/store/auth'

export default defineNuxtPlugin(({ provide }) => {
	const auth = useAuthStore()
	provide('auth', auth)
})
