<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: projects = data.projects;
</script>

<article class="p-3 md:p-5 container">
	{#if projects}
		<div class="md:flex gap-4">
			<div class="md:sticky md:top-[calc(64px+theme(margin.5))] md:w-52 h-fit pb-4 bg-white">
				<h1>
					<span class="text-base block">recent</span>
					Projects.
				</h1>
			</div>
			<ul class="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				{#each projects as project}
					<li class="flex gap-2 items-center sm:flex-col sm:items-start">
						<div class="zoom-container w-1/2 sm:w-auto" style="--bkg-url: url({project.cover})">
							<img src={project.cover} alt="" width="400" height="300" />
						</div>

						<div class="w-1/2 sm:w-auto">
							<h2>{project.name}</h2>
							<p class="text-xs">{project.shortText || ''}</p>
						</div>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</article>

<style lang="scss">
	.zoom-container {
		position: relative;
		overflow: hidden;

		&:before {
			content: '';
			position: absolute;
			inset: 0 0 0 0;
			background: var(--bkg-url) no-repeat center;
			background-size: 115%;
			clip-path: circle(0% at 100% 100%);
			transition: clip-path 0.5s ease-in-out, background-size 0.5s ease-in-out;
		}
		&:hover:before {
			clip-path: circle(150% at 100% 100%);
			background-size: 120%;
		}

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
</style>
