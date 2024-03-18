import type { AuthUser } from '~/types/store.auth'
import { getMe, postLogin } from '~/repository/authRepository'

export const useAuthStore = defineStore('auth', () => {
	const user = ref<AuthUser>(null)
	const loggedIn = ref<boolean>(false)

	const config = useRuntimeConfig()
	const authToken = useCookie(config.public.auth.cookieToken)

	const getAvatar = computed<string>(() => {
		return user.value?.avatar || ''
	})

	const addAuthToken = (token: string) => {
		loggedIn.value = true
		authToken.value = token
		// Set header token
	}

	const removeAuthToken = () => {
		loggedIn.value = false
		user.value = null
		authToken.value = null
		// Remove header token
	}

	const login = async (params) => {
		const response = await postLogin(params)
		if (response.success) {
			addAuthToken(response.result.access_token)
		}
		return response
	}

	const fetchMe = async () => {
		const response = await getMe()
		if (response.success) {
			user.value = response.result
		}
		return response
	}

	return { loggedIn, user, getAvatar, addAuthToken, removeAuthToken, login, fetchMe }
})
