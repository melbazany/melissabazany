/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
            xxs: '374px',
            xs: '550px', // Not defined in Figma
            sm: '768px', // Not defined in Figma
            md: '991px', // Not defined in Figma
            lg: '1280px',
            xl: '1430px',
            xxl: '1808px'
        },
        fontFamily: {
            'ivypresto-headline': ['ivypresto-headline', 'serif'],
            'questa-sans': ['questa-sans', 'sans-serif'],
            'source-serif': ['source-serif', 'serif'],
        },
		fontSize: (theme) => ({
            'b1': ['clamp(1.125rem, 1.0722rem + 0.2222vw, 1.25rem)', {
                lineHeight: '1.2',
                letterSpacing: '0',
                fontWeight: '400',
            }],
            'd1': ['clamp(3.5rem, 1.6818rem + 6.2727vw, 7.5rem)', {
                lineHeight: '1',
                letterSpacing: '0',
                fontWeight: '600',
            }],
            'd2': ['clamp(2.25rem, 1.5543rem + 3.4783vw, 4.25rem)', {
                lineHeight: '1',
                letterSpacing: '0',
                fontWeight: '400',
            }],
            'd3': ['clamp(1.75rem, 1.663rem + 0.4348vw, 2rem)', {
                lineHeight: '1',
                letterSpacing: '0',
                fontWeight: '600',
            }],
            'd4': ['clamp(1.5rem, 1.413rem + 0.4348vw, 1.75rem)', {
                lineHeight: '1',
                letterSpacing: '0',
                fontWeight: '400',
            }],
            'd5': ['clamp(0.875rem, 0.7446rem + 0.6522vw, 1.25rem)', {
				lineHeight: '1',
                letterSpacing: '0',
                fontWeight: '400',
            }],
			'd6': ['clamp(1rem, 0.9096rem + 0.4255vw, 1.25rem)', {
				lineHeight: '1',
				letterSpacing: '0',
				fontWeight: '400',
			}],
        }),
		extend: {},
	},
	plugins: [],
}
