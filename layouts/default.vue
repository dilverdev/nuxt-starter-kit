<script setup lang="ts">
const showBanner = ref<boolean>(false)
</script>

<template>
	<div class="flex flex-col flex-1 min-h-screen">
		<LazyInfoBanner v-if="showBanner" />

		<div class="flex-shrink-0 sticky top-0 z-50">
			<LayoutHeader />
		</div>

		<main class="flex-1 flex flex-col">
			<slot />
		</main>

		<LayoutFooter />
	</div>
</template>
