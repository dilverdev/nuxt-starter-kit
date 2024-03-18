<script setup lang="ts">
defineOptions({
	inheritAttrs: false,
})

const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
})
</script>

<template>
	<div class="w-full h-full flex flex-col justify-center text-center bg-slate-900 p-8">
		<div class="relative">
			<h1 class="text-8xl mb-4 text-white">
				{{ props.title }}
			</h1>
			<p class="text-5xl text-gray-200 leading-tight">
				{{ props.description }}
			</p>
		</div>
	</div>
</template>
