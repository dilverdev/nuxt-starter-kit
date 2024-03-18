<script setup lang="ts">
import { postLogin } from '~/repository/authRepository'

const title = ref('Login')
const formLogin = ref({
	email: '',
	password: '',
})

const submitLogin = async () => {
	const { data } = await postLogin(formLogin)
	console.log(data.value)
}

useSeoMeta({
	title: title.value,
	ogTitle: title.value,
})
</script>

<template>
	<UContainer>
		<UCard>
			<UInput
				v-model="formLogin.email"
				label="Email"
			/>
			<UInput
				v-model="formLogin.password"
				label="Password"
			/>
			<UButton @click="submitLogin">login</UButton>
		</UCard>
	</UContainer>
</template>

<style scoped></style>
