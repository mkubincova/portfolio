<script lang="ts">
	import Home from '$lib/pages/Home.svelte';
	import About from '$lib/pages/About.svelte';
	import Projects from '$lib/pages/Projects.svelte';
	import type { PageData } from './$types';
	import Contact from '$lib/pages/Contact.svelte';

	export let data: PageData;

	$: jobs = data.jobs;
	$: education = data.education;
	$: projects = data.projects;
</script>

<Home />
<About {jobs} {education} />
<Projects {projects} />
<Contact />
