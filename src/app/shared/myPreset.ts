//mypreset.ts
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

const MyPreset = definePreset(Aura, {
	components: {
		panel: {
			colorScheme: {
				dark: {
					root: {
						background: '{surface.800}',
					},
				},
				light: {
					root: {
						background: '{stone.50}',
					},
				},
			},
		},
		editor: {
			colorScheme: {
				dark: {
					content: {
						background: '{surface.950}',
					},
				},
				light: {
					content: {
						background: '{stone.100}',
					},
				},
			},
		},
		card: {
			title: {
				fontSize: '16px',
				fontWeight: 'bold',
			},
		},
	},
	semantic: {
		colorScheme: {
			light: {
				surface: {
					0: '#ffffff',
					50: '{stone.50}',
					100: '{stone.100}',
					200: '{stone.200}',
					300: '{stone.300}',
					400: '{stone.400}',
					500: '{stone.500}',
					600: '{stone.600}',
					700: '{stone.700}',
					800: '{stone.800}',
					900: '{stone.900}',
					950: '{stone.950}',
				},
				primary: {
					50: '{rose.50}',
					100: '{rose.100}',
					200: '{rose.200}',
					300: '{rose.300}',
					400: '{rose.400}',
					500: '{rose.500}',
					600: '{rose.600}',
					700: '{rose.700}',
					800: '{rose.800}',
					900: '{rose.900}',
					950: '{rose.950}',
				},
			},
			dark: {
				surface: {
					0: '#ffffff',
					50: '{slate.50}',
					100: '{slate.100}',
					200: '{slate.200}',
					300: '{slate.300}',
					400: '{slate.400}',
					500: '{slate.500}',
					600: '{slate.600}',
					700: '{slate.700}',
					800: '{slate.800}',
					900: '{slate.900}',
					950: '{slate.950}',
				},
				primary: {
					50: '{teal.50}',
					100: '{teal.100}',
					200: '{teal.200}',
					300: '{teal.300}',
					400: '{teal.400}',
					500: '{teal.500}',
					600: '{teal.600}',
					700: '{teal.700}',
					800: '{teal.800}',
					900: '{teal.900}',
					950: '{teal.950}',
				},
			},
		},
	},
});

export default MyPreset;
