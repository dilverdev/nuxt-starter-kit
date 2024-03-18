export function useAPI(url: string, options?: any) {
	return useFetch(url, {
		...options,
		$fetch: useNuxtApp().$api,
	})
}
