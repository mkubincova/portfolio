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

<header>
	<nav>
		<ul class="menu-main">
			{#each mainMenu as item}
				<li><a href={item.path}>{item.name}</a></li>
			{/each}
		</ul>

		<div class="menu-contact">
			<a href=""><Mail /> mkubincova@proton.me</a>
			<a href=""><Github /></a>
			<a href=""><Codepen /></a>
			<a href=""><Linkedin /></a>
		</div>
	</nav>
</header>

<style lang="scss">
	header {
		background-color: #333;
		padding: var(--gap);
		nav {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: var(--gap);
		}
	}
	.menu-main,
	.menu-contact {
		display: flex;
		align-items: center;
		gap: var(--gap-sm);
	}
	a :global(svg) {
		vertical-align: middle;
	}
</style>
