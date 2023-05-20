<script lang="ts">
	import '../styles/_index.css';
	import { page } from '$app/stores';
	import { Header } from '$components';
</script>

<svelte:head>
	<title>Magda {$page.data.title ? `| ${$page.data.title}` : ''}</title>
</svelte:head>

<div id="app">
	<Header />
	<main>
		<slot />
	</main>
	<footer class="p-3 text-xs">
		<p>© Copyright {new Date().getFullYear()}. All rights reserved.</p>
	</footer>
</div>

<style lang="scss">
	#app {
		min-height: 100vh;
		display: flex;
		flex-direction: column;

		main {
			flex: 1;
			display: flex;
			flex-direction: column;
		}
		footer {
			background-color: var(--color-text);
			color: var(--color-text-inverse);
			position: relative;
		}
	}
</style>
