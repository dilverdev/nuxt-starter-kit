export default defineAppConfig({
	ui: {
		container: {
			constrained: 'w-full',
		},
		button: {
			default: {
				loadingIcon: 'border-current border-2 rounded-full border-b-transparent opacity-70',
			},
			icon: {
				size: {
					'2xs': 'h-4 w-4',
					xs: 'h-4 w-4',
					sm: 'h-4 w-4',
					md: 'h-4 w-4',
					lg: 'h-4 w-4',
					xl: 'h-4 w-4',
				},
			},
		},
		badge: {
			rounded: 'rounded-full',
		},
		alert: {
			description: 'mt-[0.15rem]',
		},
	},
})
