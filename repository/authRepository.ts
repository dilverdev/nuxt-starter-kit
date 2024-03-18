export const postLogin = (params) => {
	return useAPI('/api/example/', {
		method: 'post',
		body: params,
	})
}

export const getMe = () => {
	return useAPI('/api/example/', {
		method: 'get',
	})
}
