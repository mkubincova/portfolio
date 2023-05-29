<script lang="ts">
	import { Button } from '$components';
	import photoSq from '$assets/profile-square.png';
	import photo from '$assets/profile-rect.png';
</script>

<article id="home">
	<section
		class="flex flex-col lg:flex-row gap-10 items-center lg:items-start container py-5 md:px-16"
	>
		<div class="text-center lg:text-left flex-1 lg:pt-5 xl:pt-16">
			<h1>
				Hi, I'm Magda,<br />a
				<span class="circle-sketch-highlight" style="--color-sketch: var(--color-blue)"
					>Web&nbsp;Developer</span
				> with an eye for design.
			</h1>
			<div class="flex flex-wrap gap-3 mt-5 justify-center lg:justify-start">
				<Button element="a" href="#about">About me</Button>
				<Button element="a" variant="solid" href="#projects">Check out my work</Button>
			</div>
		</div>
		<div class="lg:w-1/4">
			<div class="cover-container">
				<picture>
					<source media="(min-width: 1024px)" srcset={photo} />
					<img
						src={photoSq}
						alt="Headshot of Magdaléna Kubincová"
						class="rounded-full md:rounded-[200px] relative max-w-[200px] md:max-w-xs lg:max-w-none bg-[var(--color-green)]"
					/>
				</picture>
			</div>
		</div>
	</section>
</article>
