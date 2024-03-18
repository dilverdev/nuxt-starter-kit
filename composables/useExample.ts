export const useExample = () => {
	const exampleRef = ref<string>('exampleRef')

	const exampleComputed = computed<string>(() => {
		return 'exampleComputed'
	})

	const exampleMethod = () => {
		console.log('exampleMethod')
	}

	return { exampleRef, exampleComputed, exampleMethod }
}
