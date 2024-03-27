import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'RAI on SPCS',
			sidebar: [
				{
					label: 'Sections',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Introduction', link: '/sections/introduction/' },
						{ label: 'Setup', link: '/sections/setup/' },
						{ label: 'The VS Code Extension', link: '/sections/vs-code-extension/' },
						{ label: 'PyRel Basics', link: '/sections/pyrel-basics/' },
						{ label: 'Graph Analytics in PyRel', link: '/sections/graph-analytics-in-pyrel/' },
					],
				},
			],
		}),
	],
});
