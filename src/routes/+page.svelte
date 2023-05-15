<script>
	import { Button } from '$components';
</script>

<article class="p-3 md:p-5 bg-sky-700">
	<section class="flex flex-col md:flex-row items-center justify-center">
		<div>
			<h1 class="text-5xl md:text-7xl">Hi, <br />I'm Magda</h1>
			<p class="max-w-prose text-xl md:text-2xl">a full-stack web developer.</p>
			<div class="flex flex-wrap gap-2 mt-3">
				<Button element="a" variant="solid" href="/project">Check out my work</Button>
				<Button element="a" variant="outline" href="/about">About me</Button>
			</div>
		</div>
	</section>
</article>
