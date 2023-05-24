<script lang="ts">
	import '../styles/_index.css';
	import { page } from '$app/stores';
	import { Header, Mascot } from '$components';
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
		<p class="container">© Copyright {new Date().getFullYear()}. All rights reserved.</p>
	</footer>
	<Mascot />
</div>

<style lang="scss">
	#app {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		background-color: var(--color-site-bkg);
		main {
			flex: 1;
			display: flex;
			flex-direction: column;
		}

		footer {
			padding-bottom: 40px;
		}
	}
</style>
