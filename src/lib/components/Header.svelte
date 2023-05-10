<script lang="ts">
	import { Mail, Github, Codepen, Linkedin, type Icon } from 'lucide-svelte';

	const mainMenu: { path: string; name: string }[] = [
		{
			name: 'Home',
			path: '/'
		},
		{
			name: 'Projects',
			path: '/about'
		},
		{
			name: 'About',
			path: '/about'
		}
	];
</script>

<header class="p-3 md:p-5 bg-slate-200 fixed top-0 left-0 right-0">
	<nav class="flex justify-between gap-4 flex-wrap container">
		<ul class="flex gap-4">
			{#each mainMenu as item}
				<li><a href={item.path}>{item.name}</a></li>
			{/each}
		</ul>

		<ul class="flex gap-2 ml-auto">
			<li>
				<a href="mailto:mkubincova@proton.me" class="flex gap-1"
					><Mail /> <span class="hidden md:block">mkubincova@proton.me</span></a
				>
			</li>
			<li><a href="https://github.com/mkubincova"><Github /></a></li>
			<li><a href="https://codepen.io/mkubincova"><Codepen /></a></li>
			<li><a href="https://www.linkedin.com/in/mkubincova/"><Linkedin /></a></li>
		</ul>
	</nav>
</header>
