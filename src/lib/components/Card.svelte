<script lang="ts">
	import { ArrowUpRight } from 'lucide-svelte';

	export let item: { name: string; link: string; cover: string; desc: string };
	export let baseImgUrl: string;
</script>

<a href={item.link} target="_blank" class="card">
	<div class="sm:aspect-[2/1] overflow-hidden">
		<img
			srcset="{baseImgUrl}/w_130/{item.cover} 130w, {baseImgUrl}/w_210/{item.cover} 210w, {baseImgUrl}/w_300/{item.cover} 300w, {baseImgUrl}/w_400/{item.cover} 400w, {baseImgUrl}/w_600/{item.cover} 600w, {baseImgUrl}/w_800/{item.cover} 800w, {baseImgUrl}/w_1000/{item.cover} 1000w"
			sizes="(min-width: 1225px) 400w, (min-width: 1024px) 35vw, (min-width: 640px) 50vw, 35vw"
			alt="Homepage of {item.name} website."
			loading="lazy"
			class="w-full h-full object-cover"
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
		@apply bg-[var(--color-site-bg)] rounded-xl border-[3px] border-current overflow-hidden hover:scale-105 transition-transform no-underline grid grid-cols-3 sm:grid-cols-1 content-start;
	}
</style>
