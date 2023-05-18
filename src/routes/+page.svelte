<script lang="ts">
	import { Button } from '$components';

	function moveEyes(e: MouseEvent) {
		const eyes = document.querySelectorAll<HTMLElement>('.eye');

		eyes.forEach((eye) => {
			let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
			let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;

			let radian = Math.atan2(e.pageX - x, e.pageY - y);
			let rotation = radian * (180 / Math.PI) * -1 + 270;

			eye.style.transform = `rotate(${rotation}deg)`;
		});
	}
</script>

<article class="flex justify-center" on:mousemove={moveEyes}>
	<section class="mt-16">
		<h1 class="text-5xl md:text-7xl">Hi, <br />I'm Magda</h1>
		<p class="text-xl md:text-2xl">a full-stack web developer.</p>
		<div class="flex flex-wrap gap-2 mt-3">
			<Button element="a" variant="solid" href="/project">Check out my work</Button>
			<Button element="a" variant="outline" href="/about">About me</Button>
		</div>
	</section>
	<div class="mascot">
		<div class="eyes">
			<div class="eye" />
			<div class="eye" />
		</div>
	</div>
</article>

<style lang="scss">
	article {
		background-color: hsla(152, 0%, 100%, 1);
		background-image: radial-gradient(at 93% 4%, hsla(116, 83%, 77%, 1) 0px, transparent 50%),
			radial-gradient(at 87% 81%, hsla(50, 75%, 76%, 1) 0px, transparent 50%),
			radial-gradient(at 34% 68%, hsla(189, 49%, 70%, 1) 0px, transparent 50%),
			radial-gradient(at 14% 15%, hsla(163, 76%, 79%, 1) 0px, transparent 50%);
		position: relative;
	}

	.mascot {
		position: absolute;
		bottom: 0;
		left: 70%;
		width: 60px;
		height: 30px;
		background-color: var(--color-text);
		border-radius: 15px 0 0 0;
		transition: height 0.5s ease-in-out;

		&:hover {
			height: 80px;
		}
		.eyes {
			width: 130%;
			margin-left: -15%;
			margin-top: 10px;
			display: flex;
			justify-content: space-between;
			position: relative;
		}

		.eye {
			position: relative;
			width: 35px;
			aspect-ratio: 1;
			background-color: var(--color-text-inverse);
			display: block;
			pointer-events: none;
			border-radius: 50%;
			box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);

			&::before {
				content: '';
				position: absolute;
				top: 50%;
				left: 10px;
				transform: translate(-50%, -50%);
				width: 15px;
				aspect-ratio: 1;
				background-color: var(--color-text);
				border-radius: 50%;
				border: 2px solid hsla(189, 49%, 70%, 1);
				box-shadow: inset 0 0 2px hsla(189, 49%, 40%, 1);
			}
		}
	}
</style>
