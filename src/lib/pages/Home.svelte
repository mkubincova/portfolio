<script lang="ts">
	import { Button } from '$components';
	import photoSq from '$assets/profile-square.png';
	import photo from '$assets/profile.png';
</script>

<article
	class="flex justify-center items-center pt-[calc(54px+theme(padding.3))] md:pt-[calc(60px+theme(padding.3))]"
	id="home"
>
	<section
		class="flex flex-col lg:flex-row gap-y-16 gap-x-10 items-center container py-20 lg:px-20"
	>
		<div class="text-center lg:text-left">
			<h1>
				Hi, I'm Magda, a <span class="text-bkg-blue">Web Developer</span> with an eye for design.
			</h1>
			<!-- <p class="text-xl md:text-2xl">I make websites and web applications</p> -->
			<div class="flex flex-wrap gap-2 mt-5 justify-center lg:justify-start">
				<Button element="a" variant="outline" href="#about">About me</Button>
				<Button element="a" variant="solid" href="#projects">Check out my work</Button>
			</div>
		</div>
		<div class="px-5 lg:px-10">
			<div class="img-container">
				<picture>
					<source media="(min-width: 768px)" srcset={photo} />
					<img src={photoSq} alt="" />
				</picture>
			</div>
		</div>
	</section>
</article>

<style lang="scss">
	.img-container {
		position: relative;
		&::before {
			content: '';
			position: absolute;
			inset: 0;
			transform: translate(10%, 10px);
			background: var(--color-yellow);
			border-radius: 50%;
			border: 5px solid var(--color-text);

			@media (min-width: 768px) {
				border-radius: 200px;
			}
		}
	}
	img {
		border-radius: 50%;
		max-width: 200px;
		position: relative;

		@media (min-width: 768px) {
			border-radius: 200px;
			max-width: 300px;
		}
		@media (min-width: 1024px) {
			max-width: 500px;
		}
	}
</style>
