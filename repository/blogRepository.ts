export const getArticles = () => {
	return useAPI('/api/blog/articles', {
		method: 'get',
	})
}

export const getArticle = () => {
	return useAPI('/api/blog/article', {
		method: 'get',
	})
}

export const postArticle = () => {
	return useAPI('/api/blog/article', {
		method: 'post',
	})
}

export const patchArticle = () => {
	return useAPI('/api/blog/article', {
		method: 'patch',
	})
}

export const deleteArticle = () => {
	return useAPI('/api/blog/article', {
		method: 'delete',
	})
}
