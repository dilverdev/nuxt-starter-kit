export default eventHandler((event) => {
	return {
		id: 1,
		title: 'Article 1',
		content: 'Content 1',
		image: 'https://via.placeholder.com/150',
		slug: 'article-1',
		date: '2024-01-01',
		autor: {
			id: 1,
			name: 'John Doe',
			image: 'https://via.placeholder.com/150',
		},
	}
})
