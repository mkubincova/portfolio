<script lang="ts">
	import { ArrowUpRight } from 'lucide-svelte';

	export let item: { name: string; link: string; cover: string; desc: string };
</script>

<a href={item.link} target="_blank" class="card">
	<div class="sm:aspect-[2/1] overflow-hidden">
		<img
			src={item.cover}
			alt="Homepage of {item.name} website."
			class="w-full h-full object-cover"
			width="400"
			height="200"
		/>
	</div>

	<div
		class="p-2 border-current col-span-2 border-l-[3px] sm:border-t-[3px] sm:border-l-0 flex justify-between items-center gap-1"
	>
		<div class="flex-1 sm:flex-initial">
			<p class="text-lg font-bold leading-5 mb-1">{item.name}</p>
			<p class="text-xs">{item.desc}</p>
		</div>
		<ArrowUpRight size={35} role="img" aria-hidden />
	</div>
</a>

<style lang="scss">
	.card {
		@apply bg-[var(--color-text-inverse)] rounded-xl border-[3px] border-current overflow-hidden hover:scale-105 transition-transform no-underline grid grid-cols-3 sm:grid-cols-1 content-start;
	}
</style>
