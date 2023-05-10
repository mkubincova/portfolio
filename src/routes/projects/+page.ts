import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const projects = await fetch('/data/projects.json');

	return {
		projects: projects.json()
	};
};
