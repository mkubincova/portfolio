<script lang="ts">
	import '../styles/_index.css';
	import { page } from '$app/stores';
	import { Header, Mascot } from '$components';
</script>

<svelte:head>
	<title>Magda {$page.data.title ? `| ${$page.data.title}` : ''}</title>
</svelte:head>

<div id="app" class="min-h-screen flex flex-col bg-[var(--color-site-bg)]">
	<Header />
	<main class="flex-1 flex flex-col">
		<slot />
	</main>
	<Mascot />
</div>
