<script lang="ts">
	import { Mail } from 'lucide-svelte';
	import Button from '$components/Button.svelte';
</script>

<article id="contact" class="flex justify-center items-center py-16 lg:py-20 bg-pattern">
	<div class="container flex justify-center">
		<section
			class="bg-[var(--color-site-bg)] p-5 rounded-xl border-[5px] border-current text-center w-fit"
		>
			<h2>Get in touch!</h2>
			<p class="text-base max-w-prose">
				Do you have a project I can help with, something you would like to ask, or just want to say
				hi? Feel free to leave me a message, I'll be happy to hear from you. You can use the button
				below to email me or contact me through <a href="https://www.linkedin.com/in/mkubincova"
					>Linkedin.</a
				>
			</p>
			<Button
				element="a"
				variant="solid"
				href="mailto:makubincova@proton.me?subject=Hello"
				target="_blank"
				className="mt-5"
				><svelte:fragment slot="leftIcon"><Mail role="img" aria-hidden /></svelte:fragment>Message
				me
			</Button>
		</section>
	</div>
</article>
