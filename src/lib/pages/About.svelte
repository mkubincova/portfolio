<script lang="ts">
	// import photo from '$assets/photo.png';
	import { Download, MapPin } from 'lucide-svelte';
	import Button from '$components/Button.svelte';
	import Label from '$components/Label.svelte';

	export let jobs: any = undefined;
	export let education: any = undefined;
</script>

<article id="about">
	<div class="container-sm">
		<section class="flex flex-col gap-3 md:flex-row items-center justify-center pb-6">
			<div>
				<h2>About me...</h2>
				<p class="text-base max-w-prose">
					My name is <strong>Magdaléna Kubincová</strong> and I am a web developer from Slovakia.
					Originally on my way to become an economist, I was introduced to coding by chance during
					an internship and stuck with ever since. I'm passionate about creating web applications
					and after a few years of working mainly with front-end, I'm expanding my skillset to
					<strong>full-stack development.</strong>
					With some online courses and small projects under my belt, I looking for a job to further improve
					in this and other areas.
				</p>
				<Button
					element="a"
					variant="outline"
					href="/books/a-great-book.pdf"
					target="_blank"
					className="mt-3"
					><svelte:fragment slot="leftIcon"><Download /></svelte:fragment>Dowload CV
				</Button>
			</div>
			<div class="order-first max-w-xs p-8">
				<!-- <div class="img-frame"><img src={photo} alt="" /></div> -->
			</div>
		</section>
	</div>
	<div class="container grid md:grid-cols-2 gap-8">
		{#if jobs}
			<section>
				<h3 class="pb-2 border-b-4 border-[var(--color-text)]">work experience</h3>
				<ul class="mt-6">
					{#each jobs as item}
						<li class="mb-8">
							<Label>{item.period}</Label>
							<h4 class="text-lg my-1">
								{item.position} <span class="font-light">at {item.company}</span>
							</h4>
							<small class="flex items-center gap-1 text-stone-500"
								><MapPin size="15" />{item.location}</small
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
				<h3 class="pb-2 border-b-4 border-[var(--color-text)]">education</h3>
				<ul class="mt-6">
					{#each education as item}
						<li class="mb-6">
							<Label>{item.period}</Label>
							<h4 class="text-lg my-1">
								{item.program} <span class="font-light">at {item.school}</span>
							</h4>
							<small class="flex items-center gap-1 text-stone-500"
								><MapPin size="15" />{item.location}</small
							>
						</li>
					{/each}
				</ul>
			</section>
		{/if}
	</div>
</article>

<style lang="scss">
	.img-frame {
		background-color: #fcff99;
		background-image: radial-gradient(at 64% 86%, hsla(187, 93%, 62%, 1) 0px, transparent 50%),
			radial-gradient(at 34% 8%, hsla(246, 94%, 64%, 1) 0px, transparent 50%),
			radial-gradient(at 42% 91%, hsla(352, 73%, 70%, 1) 0px, transparent 50%),
			radial-gradient(at 29% 35%, hsla(264, 95%, 71%, 1) 0px, transparent 50%),
			radial-gradient(at 85% 37%, hsla(15, 98%, 74%, 1) 0px, transparent 50%),
			radial-gradient(at 8% 24%, hsla(210, 72%, 67%, 1) 0px, transparent 50%);
		transform: rotate(-4deg);
		position: relative;
		transition: transform 0.3s ease-in-out;

		&::after {
			content: '';
			position: absolute;
			inset: 0;
			border: 4px solid var(--color-text);
			transform: rotate(7deg);
			transition: transform 0.3s ease-in-out;
		}

		img {
			transform: rotate(4deg);
			transition: transform 0.3s ease-in-out;
		}

		&:hover {
			transform: rotate(0deg);
			&::after,
			img {
				transform: rotate(0deg);
			}
		}
	}
</style>
