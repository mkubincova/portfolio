<script lang="ts">
	import { Button } from '$components';
	import photoSq from '$assets/profile-square.png';
	import photo from '$assets/profile-rect.png';
</script>

<article id="home">
	<section
		class="flex flex-col lg:flex-row gap-20 lg:gap-10 items-center lg:items-start container py-5 md:px-16 lg:pt-16"
	>
		<div class="text-center lg:text-left flex-1">
			<h1>
				Hi! I'm Magda,<br />a
				<span class="circle-sketch-highlight" style="--color-sketch: var(--color-purple)"
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
						class="rounded-[0.5em] relative max-w-[200px] md:max-w-xs lg:max-w-none border-5 border-current bg-[var(--color-yellow)] grayscale rotate-[5deg] hover:rotate-0 hover:grayscale-0 transition duration-300 z-10 shadow-[-5px_5px_10px_rgba(0,0,0,0.25)]"
					/>
				</picture>
			</div>
		</div>
	</section>
</article>
