<script setup lang="ts">
const title = ref('Home')

useSeoMeta({
	title: title.value,
	ogTitle: title.value,
})
</script>

<template>
	<UContainer>index</UContainer>
</template>

<style scoped></style>
