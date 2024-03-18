export interface User {
	avatar: string | null
	email: string
	id: number
	name: string
	last_name: string
}

export interface AuthUser {
	user: User | null
}
