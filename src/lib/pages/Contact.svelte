<script lang="ts">
	import { Download, Mail, MapPin } from 'lucide-svelte';
	import Button from '$components/Button.svelte';
</script>

<article id="contact" class="flex justify-center items-center">
	<div class="container-sm">
		<section class="text-center">
			<h2>Get in touch!</h2>
			<p class="text-base max-w-prose">
				Do you have a project I can help with, something you would like to ask, or just want to say
				hi? Feel free to leave me a message, I'll be happy to hear from you. You can use the button
				below to email me or message me on <a href="https://www.linkedin.com/in/mkubincova"
					>Linkedin.</a
				>
			</p>
			<Button
				element="a"
				variant="solid"
				href="mailto:makubincova@proton.me?subject=Hello"
				target="_blank"
				className="mt-3"
				><svelte:fragment slot="leftIcon"><Mail /></svelte:fragment>Message me
			</Button>
		</section>
	</div>
</article>

<style lang="scss">
	article {
		background-color: hsla(152, 0%, 100%, 1);
		background-image: radial-gradient(at 93% 4%, hsla(116, 83%, 77%, 1) 0px, transparent 50%),
			radial-gradient(at 87% 81%, hsla(50, 75%, 76%, 1) 0px, transparent 50%),
			radial-gradient(at 34% 68%, hsla(189, 49%, 70%, 1) 0px, transparent 50%),
			radial-gradient(at 14% 15%, hsla(163, 76%, 79%, 1) 0px, transparent 50%),
			radial-gradient(at 0% 100%, hsla(22, 100%, 77%, 1) 0px, transparent 50%);
		min-height: calc(100vh - 40px);
	}
</style>
