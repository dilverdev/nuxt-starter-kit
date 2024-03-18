<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
	error: {
		type: Object as PropType<NuxtError>,
		required: true,
	},
})

// useHead({
// 	htmlAttrs: {
// 		lang: 'en',
// 	},
// })

useSeoMeta({
	title: 'Page not found',
	description: 'We are sorry but this page could not be found.',
})
</script>

<template>
	<div>
		<Header />

		<UContainer>
			{{ props.error }}
		</UContainer>

		<Footer />
	</div>
</template>
