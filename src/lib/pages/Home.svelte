<script lang="ts">
	import { Button } from '$components';
	import photoSq from '$assets/profile-square.png';
	import photo from '$assets/profile-rect.png';
</script>

<article class="pt-[calc(54px+theme(padding.3))] md:pt-[calc(60px+theme(padding.3))]" id="home">
	<section
		class="flex flex-col lg:flex-row gap-10 items-center lg:items-start container py-5 md:px-16"
	>
		<div class="text-center lg:text-left flex-1 lg:pt-5 xl:pt-16">
			<h1>
				Hi, I'm Magda,<br />a <span class="text-bkg-blue">Web Developer</span> with an eye for design.
			</h1>
			<!-- <p class="text-xl md:text-2xl">I make websites and web applications</p> -->
			<div class="flex flex-wrap gap-2 mt-5 justify-center lg:justify-start">
				<Button element="a" variant="outline" href="#about">About me</Button>
				<Button element="a" variant="solid" href="#projects">Check out my work</Button>
			</div>
		</div>
		<div class="lg:w-1/4">
			<div class="img-container">
				<picture>
					<source media="(min-width: 1124px)" srcset={photo} />
					<img
						src={photoSq}
						alt=""
						class="rounded-full md:rounded-[200px] relative max-w-[200px] md:max-w-xs lg:max-w-none"
					/>
				</picture>
			</div>
		</div>
	</section>
</article>

<style lang="scss">
	.img-container {
		position: relative;
		width: fit-content;
		z-index: 10;
		&::before {
			content: '';
			position: absolute;
			inset: 0;
			transform: translate(10%, 5px);
			background: var(--color-pink);
			border-radius: 50%;
			border: 5px solid var(--color-text);

			@media (min-width: 1024px) {
				border-radius: 200px;
			}
		}
	}
</style>
