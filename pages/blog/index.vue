<script setup lang="ts">
import { getArticles } from '~/repository/blogRepository'

const { data } = await getArticles()
</script>

<template>
	<UContainer>
		{{ data }}
	</UContainer>
</template>

<style scoped></style>
