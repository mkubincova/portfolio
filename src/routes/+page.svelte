<script>
	import { Button } from '$components';
</script>

<article class="flex justify-center">
	<section class="mt-16">
		<h1 class="text-5xl md:text-7xl">Hi, <br />I'm Magda</h1>
		<p class="text-xl md:text-2xl">a full-stack web developer.</p>
		<div class="flex flex-wrap gap-2 mt-3">
			<Button element="a" variant="solid" href="/project">Check out my work</Button>
			<Button element="a" variant="outline" href="/about">About me</Button>
		</div>
	</section>
</article>

<style>
	article {
		background-color: hsla(152, 0%, 100%, 1);
		background-image: radial-gradient(at 93% 4%, hsla(116, 83%, 77%, 1) 0px, transparent 50%),
			radial-gradient(at 87% 81%, hsla(50, 75%, 76%, 1) 0px, transparent 50%),
			radial-gradient(at 34% 68%, hsla(189, 49%, 70%, 1) 0px, transparent 50%),
			radial-gradient(at 14% 15%, hsla(163, 76%, 79%, 1) 0px, transparent 50%);
	}
</style>
