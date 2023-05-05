<script lang="ts">
	import '../styles/index.scss';
	import { page } from '$app/stores';
	import { Header } from '$components';
</script>

<svelte:head>
	<title>Magda {$page.data.title ? `| ${$page.data.title}` : ''}</title>
</svelte:head>

<div id="app">
	<Header />
	<div class="content">
		<slot />
	</div>
</div>

<style lang="scss">
	#app {
		min-height: 100vh;
		display: flex;
		flex-direction: column;

		.content {
			flex: 1;
		}
	}
</style>
