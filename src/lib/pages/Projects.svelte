<script lang="ts">
	import Card from '$components/Card.svelte';

	const baseImgUrl = 'https://res.cloudinary.com/dqorjojrw/image/upload';

	const projects: { name: string; link: string; cover: string; desc: string }[] = [
		{
			name: 'Recipe app',
			link: 'https://recipe-app-frontend-iota.vercel.app/',
			cover: 'v1685525154/Portfolio%20site/my-recipes.png',
			desc: 'Cooking inspiration site build with Strapi and React.'
		},
		{
			name: 'Pivovar Moravia',
			link: 'https://pivovar-moravia.cz/',
			cover: 'v1685525159/Portfolio%20site/moravia_rzibbh.png',
			desc: 'Promotional web for local brewery'
		},
		{
			name: 'Weather app',
			link: 'https://weather-app-mkubincova.vercel.app/',
			cover: 'v1689074561/Portfolio%20site/weather-app.png',
			desc: 'Weather forecast website build with Vue3, Mapbox API and OpenWeather API.'
		},
		{
			name: 'Holzmann machines',
			link: 'https://holzmann-machines.eu/',
			cover: 'v1685525154/Portfolio%20site/holzmann_qe2fbs.png',
			desc: 'E-shop for sawing equipment distributor'
		},
		{
			name: 'Bez úrazu',
			link: 'https://bezurazu.cz/',
			cover: 'v1685525151/Portfolio%20site/bezurazu.cz_nasb4e.png',
			desc: 'Presentation for non-profit organization'
		},
		
	];
</script>

<article id="projects" class="py-16 lg:py-20">
	{#if projects}
		<div class="container">
			<section class="pb-6 text-center">
				<h2>
					Recent <span class="circle-sketch-highlight" style="--color-sketch: var(--color-green)"
						>projects.</span
					>
				</h2>
				<p class="mt-6">
					check out my <a href="https://github.com/mkubincova">Github</a> for more work
				</p>
			</section>
			<section class="mt-6 grid gap-2 sm:gap-4 gird-cols-1 sm:grid-cols-2 lg:grid-cols-3">
				{#each projects as project}
					<Card item={project} {baseImgUrl} />
				{/each}
			</section>
		</div>
	{/if}
</article>
