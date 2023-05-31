<script lang="ts">
	import { Button } from '$components';

	const baseImgUrl = 'https://res.cloudinary.com/dqorjojrw/image/upload/f_auto/q_auto';
	const photoSq = 'v1685520713/Portfolio%20site/profile-square_gegc74.png';
	const photoRect = 'v1685520718/Portfolio%20site/profile-rect_wfzjxk.png';
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
					<source
						media="(min-width: 1024px)"
						width="360"
						height="546"
						srcset="{baseImgUrl}/w_360/{photoRect}, {baseImgUrl}/w_720/{photoRect} 2x"
					/>
					<source
						media="(min-width: 768px)"
						width="310"
						height="310"
						srcset="{baseImgUrl}/w_310/{photoSq}, {baseImgUrl}/w_620/{photoSq} 2x"
					/>
					<img
						src="{baseImgUrl}/w_380/{photoSq}"
						srcset="{baseImgUrl}/w_190/{photoSq}, {baseImgUrl}/w_380/{photoSq} 2x"
						alt="Headshot of Magdaléna Kubincová"
						width="190"
						height="190"
						class="rounded-[0.5em] relative max-w-[200px] md:max-w-xs lg:max-w-none border-5 border-current bg-[var(--color-yellow)] grayscale rotate-[5deg] hover:rotate-0 hover:grayscale-0 transition duration-300 z-10 shadow-[-5px_5px_10px_rgba(0,0,0,0.25)]"
					/>
				</picture>
			</div>
		</div>
	</section>
</article>
