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
	<div class="content mt-[48px] md:mt-[64px]">
		<slot />
	</div>
</div>

<!-- <style lang="scss">
	#app {
		min-height: 100vh;
		display: flex;
		flex-direction: column;

		.content {
			flex: 1;
		}
	}
</style> -->
