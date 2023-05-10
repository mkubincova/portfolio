import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const jobs = await fetch('/data/jobs.json');
	const education = await fetch('/data/education.json');

	return {
		jobs: jobs.json(),
		education: education.json()
	};
};
