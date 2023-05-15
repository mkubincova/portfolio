<script lang="ts">
	import photo from '$assets/photo.png';
	import { Download, MapPin } from 'lucide-svelte';
	import type { PageData } from './$types';
	import Button from '$components/Button.svelte';

	export let data: PageData;

	$: jobs = data.jobs;
	$: education = data.education;
</script>

<article>
	<div class="container-sm">
		<section class="flex flex-col md:flex-row items-center justify-center">
			<div>
				<h1>Hello.</h1>
				<p class="text-base max-w-prose">
					My name is <strong>Magdaléna Kubincová</strong> and I am a web developer from Slovakia.
					Originally on my way to become an economist, I was introduced to coding by chance during
					an internship and stuck with ever since. I'm passionate about creating web applications
					and after a few years of working mainly with front-end, I would like to expand my skillset
					to
					<strong>full-stack development.</strong>
					With a few online courses and small projects under my belt, I looking for a job that would
					allow me to further improve in this and other areas.
				</p>
				<Button
					element="a"
					variant="outline"
					href="/books/a-great-book.pdf"
					target="_blank"
					className="mt-3"
					>dowload CV <svelte:fragment slot="rightIcon"><Download /></svelte:fragment></Button
				>
			</div>
			<div class="md:order-first"><img src={photo} alt="" class="max-w-xs" /></div>
		</section>

		{#if jobs}
			<section>
				<h2 class="pb-2 border-b-2 text-teal-600">work experience</h2>
				<ul class="mt-6">
					{#each jobs as item}
						<li class="mb-6">
							<div class="label mb-1">{item.period}</div>
							<h3 class="font-sans text-lg">
								{item.position} <span class="font-light">at {item.company}</span>
							</h3>
							<small class="flex items-center gap-1 text-slate-500"
								><MapPin size="15" /> {item.location}</small
							>
							{#if item.tasks.length > 0}
								<ul class="list-disc list-inside mt-1 text-sm">
									{#each item.tasks as task}
										<li>{task}</li>
									{/each}
								</ul>
							{/if}
						</li>
					{/each}
				</ul>
			</section>
		{/if}
		{#if education}
			<section>
				<h2 class="pb-2 border-b-2 text-teal-600">relevant education</h2>
				<ul class="mt-6">
					{#each education as item}
						<li class="mb-6">
							<div class="label mb-1">{item.period}</div>
							<h3 class="font-sans text-lg">
								{item.program} <span class="font-light">at {item.school}</span>
							</h3>
							<small class="flex items-center gap-1 text-slate-500"
								><MapPin size="15" /> {item.location}</small
							>
						</li>
					{/each}
				</ul>
			</section>
		{/if}
	</div>
</article>

<style>
	article {
		background-image: linear-gradient(to bottom, #639877, #cfbfae);
	}
</style>
