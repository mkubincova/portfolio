<script lang="ts">
	import Card from '$components/Card.svelte';

	const projects: { name: string; link: string; cover: string; desc: string }[] = [
		{
			name: 'Pivovar Moravia',
			link: 'https://pivovar-moravia.cz/',
			cover: 'projects/moravia.png',
			desc: 'Promotional web for local brewery'
		},
		{
			name: 'Bez úrazu',
			link: 'https://bezurazu.cz/',
			cover: 'projects/bezurazu.png',
			desc: 'Presentation for non-profit organization'
		},
		{
			name: 'Holzmann machines',
			link: 'https://holzmann-machines.eu/',
			cover: 'projects/holzmann.png',
			desc: 'E-shop for sawing equipment distributor'
		}
	];
</script>

<article id="projects" class="py-16 lg:py-20">
	{#if projects}
		<div class="container">
			<section class="pb-6 text-center">
				<h2>
					Recent <span class="circle-sketch-highlight" style="--color-sketch: var(--color-blue)"
						>projects.</span
					>
				</h2>
				<p>check out my <a href="https://github.com/mkubincova">Github</a> for more projects</p>
			</section>
			<section
				class="grid gap-2 sm:gap-4 gird-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(290px,1fr))]"
			>
				{#each projects as project}
					<Card item={project} />
				{/each}
			</section>
		</div>
	{/if}
</article>
