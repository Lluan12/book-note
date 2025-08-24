//mypreset.ts
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

const MyPreset = definePreset(Aura, {
	components: {
		card: {
			colorScheme: {
				light: {
					root: {
						background: '{surface.0}',
						color: '{surface.700}',
					},
					subtitle: {
						color: '{surface.500}',
					},
				},
				dark: {
					root: {
						background: '{surface.900}',
						color: '{surface.0}',
					},
					subtitle: {
						color: '{surface.400}',
					},
				},
			},
		},
	},
});

export default MyPreset;
