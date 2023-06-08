<script lang="ts">
	import '../styles/index.css';
	import { page } from '$app/stores';
	import { Header, Mascot } from '$components';
</script>

<svelte:head>
	<title>Magda</title>
	<meta property="og:title" content="Magdaléna Kubincová" />
	<meta
		property="og:description"
		content="Selected work by Magdaléna Kubincová: web designer and developer."
	/>
	<meta
		property="og:image"
		content="https://res.cloudinary.com/dqorjojrw/image/upload/v1686223834/Portfolio%20site/mkubincova-cover_ye7tln.png"
	/>
	<meta property="og:url" content="https://mkubincova.vercel.app/" />
</svelte:head>

<div id="app" class="min-h-screen flex flex-col bg-[var(--color-site-bg)]">
	<Header />
	<main class="flex-1 flex flex-col">
		<slot />
	</main>
	<Mascot />
</div>
