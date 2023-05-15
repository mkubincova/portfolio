<script lang="ts">
	import { Mail, Github, Codepen, Linkedin, type Icon } from 'lucide-svelte';

	const mainMenu: { path: string; name: string }[] = [
		{
			name: 'Home',
			path: '/'
		},
		{
			name: 'Projects',
			path: '/projects'
		},
		{
			name: 'About',
			path: '/about'
		}
	];

	// change header opacity
	let header: HTMLHeadElement;
	let headerOpacity = 0;

	$: if (header) {
		headerOpacity = scrollY / header.offsetHeight < 1 ? scrollY / header.offsetHeight : 1;
	}

	// show/hide header
	let scrollY: number;
	let prevScroll = 0;

	let direction = 0;
	let prevDirection = 0;

	let headerHeight: number;
	let hide = false;

	function handleScroll() {
		/* Find the direction of scroll: 0 - initial, 1 - down, 2 - up */
		if (scrollY > prevScroll) {
			direction = 1;
		}
		if (scrollY < prevScroll) {
			direction = 2;
		}

		/* Hide/show header if direction changed */
		if (direction !== prevDirection) {
			if (direction === 1 && scrollY > headerHeight) {
				hide = true;
				prevDirection = direction;
			}
			if (direction === 2) {
				hide = false;
				prevDirection = direction;
			}
		}

		prevScroll = scrollY; // update scroll position
	}
</script>

<svelte:window on:scroll={handleScroll} bind:scrollY />

<header
	class="fixed top-0 left-0 right-0 z-10 transition-transform duration-200 p-3 md:p-5"
	bind:clientHeight={headerHeight}
	bind:this={header}
	style="{hide ? `transform: translateY(-${headerHeight}px)` : ''};  --opacity: {headerOpacity};"
>
	<nav class="container flex justify-between gap-4 flex-wrap">
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

<style>
	header {
		background: rgba(255, 255, 255, var(--opacity));
	}
</style>
