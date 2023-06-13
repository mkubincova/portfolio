<script lang="ts">
	import { Download, Github, Linkedin, PaintbrushIcon } from 'lucide-svelte';
	import Button from '$components/Button.svelte';
	import IconButton from '$components/IconButton.svelte';
</script>

<article id="about" class="pt-32 md:pt-40 pb-16 -mt-24 md:pb-20 bg-pattern">
	<div class="container">
		<section class="flex flex-col gap-3 md:flex-row justify-center">
			<div class="flex gap-3 md:flex-col">
				<IconButton
					element="a"
					href="https://www.linkedin.com/in/mkubincova/"
					aria-label="Linkedin profile"
					target="_blank"
					style="--bg-color: var(--color-purple)"
				>
					<Linkedin size={35} role="img" aria-hidden />
				</IconButton>
				<IconButton
					element="a"
					href="https://github.com/mkubincova"
					aria-label="Github profile"
					target="_blank"
					style="--bg-color: var(--color-yellow)"
				>
					<Github size={35} role="img" aria-hidden />
				</IconButton>
				<IconButton
					element="a"
					href="https://www.behance.net/mkubincova"
					aria-label="Linkedin profile"
					target="_blank"
					style="--bg-color: var(--color-green)"
				>
					<PaintbrushIcon size={35} role="img" aria-hidden />
				</IconButton>
			</div>
			<div class="bg-[var(--color-site-bg)] p-5 rounded-xl border-[5px] border-current">
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
					href="/CV.pdf"
					target="_blank"
					className="mt-5"
					download="Magdalena_Kubincova_CV"
					><svelte:fragment slot="leftIcon"><Download role="img" aria-hidden /></svelte:fragment
					>Dowload CV
				</Button>
			</div>
		</section>
	</div>
</article>
