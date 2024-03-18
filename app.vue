<script setup lang="ts">
const colorMode = useColorMode()
const config = useRuntimeConfig()

const title = ref<string>('Site title')
const description = ref<string>('Site description')

const color = computed(() => (colorMode.value === 'dark' ? '#111827' : 'white'))

useHead({
	htmlAttrs: {
		lang: 'es',
	},
	meta: [
		{ charset: 'utf-8' },
		{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		{ key: 'theme-color', name: 'theme-color', content: color },
		{
			name: 'robots',
			content: config.public.meta.robots,
		},
	],
	link: [{ rel: 'icon', type: 'image/x-icon', href: `/favicon.png` }],
})

useSeoMeta({
	titleTemplate: '%s - Starter Kit',
	title,
	description,
	ogTitle: title,
	ogDescription: description,
	ogUrl: config.public.siteUrl,
	ogImage: `/social-card.png`,
	twitterTitle: title,
	twitterDescription: description,
	twitterImage: `/social-card.png`,
	twitterCard: 'summary_large_image',
})
</script>

<template>
	<NuxtLayout>
		<NuxtLoadingIndicator :height="1" />
		<NuxtPage />
	</NuxtLayout>
</template>
