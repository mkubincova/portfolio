<script lang="ts">
	import { Download, Github, Linkedin, PaintbrushIcon } from 'lucide-svelte';
	import Button from '$components/Button.svelte';
</script>

<article id="about" class="pt-24 pb-16 -mt-20 lg:pt-36 lg:pb-20">
	<div class="container">
		<section class="flex flex-col gap-3 md:flex-row justify-center">
			<div class="flex gap-3 md:flex-col">
				<a
					href="https://www.linkedin.com/in/mkubincova/"
					target="_blank"
					class="p-3 rounded-xl bg-[var(--color-blue)] hover:scale-105 transition-transform"
					aria-label="Linkedin profile"><Linkedin size={35} role="img" aria-hidden /></a
				>

				<a
					href="https://github.com/mkubincova"
					target="_blank"
					class="p-3 rounded-xl bg-[var(--color-pink)] hover:scale-105 transition-transform"
					aria-label="Github profile"><Github size={35} role="img" aria-hidden /></a
				>

				<a
					href="https://www.behance.net/mkubincova"
					target="_blank"
					class="p-3 rounded-xl bg-[var(--color-purple)] hover:scale-105 transition-transform"
					aria-label="Behance profile"><PaintbrushIcon size={35} role="img" aria-hidden /></a
				>
			</div>
			<div class="bg-[var(--color-text-inverse)] p-5 rounded-xl border-[5px] border-current">
				<h2>About me...</h2>
				<p class="text-base max-w-prose">
					My name is <strong>Magdaléna Kubincová</strong> and I am a web developer from Slovakia.
					Originally on my way to become an economist, I was introduced to coding by chance during
					an internship and stuck with it ever since. I'm passionate about creating web applications
					and after a few years of working mainly with front-end, I'm expanding my skillset to
					<strong>full-stack development.</strong>
					With several online courses and personal projects under my belt, I'm currently looking for
					a job to further improve in this area.
				</p>
				<Button
					element="a"
					variant="solid"
					href="/books/a-great-book.pdf"
					target="_blank"
					className="mt-5"
					><svelte:fragment slot="leftIcon"><Download role="img" aria-hidden /></svelte:fragment
					>Dowload CV
				</Button>
			</div>
		</section>
	</div>
</article>

<style lang="scss">
	article {
		background-color: var(--color-yellow);
		background-image: linear-gradient(var(--color-text) 1px, transparent 1px),
			linear-gradient(to right, var(--color-text) 1px, var(--color-yellow) 1px);
		background-size: 30px 30px;
		background-attachment: fixed;
		box-shadow: inset 0 0px 1em rgba(0, 0, 0, 0.7);
	}
</style>
