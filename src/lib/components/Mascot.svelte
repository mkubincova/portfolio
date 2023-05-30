<script lang="ts">
	function moveEyes(e: MouseEvent) {
		const eyes = document.querySelectorAll<HTMLElement>('.eye');

		eyes.forEach((eye) => {
			let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
			let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;

			let radian = Math.atan2(e.clientX - x, e.clientY - y);
			let rotation = radian * (180 / Math.PI) * -1 + 270;

			eye.style.transform = `rotate(${rotation}deg)`;
		});
	}
</script>

<svelte:window on:mousemove={moveEyes} />

<div id="mascot-container" class="fixed bottom-0 w-screen z-20">
	<div
		class="absolute bottom-0 right-[20px] w-[60px] h-[35px] bg-current rounded-tl-xl transition-[height] duration-500 hover:h-[70px]"
	>
		<div class="w-[130%] -ml-[15%] mt-2.5 flex justify-between relative">
			<div class="eye" />
			<div class="eye" />
		</div>
	</div>
</div>

<style lang="scss">
	.eye {
		@apply relative w-[35px] aspect-square bg-[var(--color-site-bg)] block pointer-events-none rounded-full border border-current;
		box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);

		&::before {
			@apply content-[''] absolute inset-y-1/2 left-[10px] w-[15px] -translate-x-1/2 -translate-y-1/2 aspect-square bg-[var(--color-text)] rounded-full;
		}
	}
</style>
