<script lang="ts">
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';

	type Element = $$Generic<'button' | 'a'>;

	interface ButtonComponentElement {
		button: HTMLButtonAttributes;
		a: HTMLAnchorAttributes;
	}

	type $$Props = ButtonComponentElement[Element] & {
		element: Element;
		variant?: 'solid' | undefined;
		className?: string;
	};

	export let element: Element;
	export let variant: 'solid' | undefined = undefined;
	export let className: string = '';

	let node: HTMLAnchorElement | HTMLButtonElement;
</script>

<svelte:element
	this={element}
	bind:this={node}
	class="btn {variant ? `btn-${variant}` : ''} {className}"
	on:click
	{...$$restProps}
>
	{#if $$slots.leftIcon}<span class="inline-block align-bottom mr-1"><slot name="leftIcon" /></span
		>{/if}
	<slot />
	{#if $$slots.rightIcon}<span class="nline-block align-bottom ml-1"><slot name="rightIcon" /></span
		>{/if}
</svelte:element>

<style lang="scss">
	.btn {
		--box-shadown-size: 3px;
		@apply inline-block font-medium cursor-pointer py-2 px-3 no-underline rounded-md border-current border-3 bg-[var(--color-site-bg)];
		box-shadow: var(--box-shadown-size) var(--box-shadown-size) 0px var(--color-text);

		&.btn-solid {
			background-color: var(--color-yellow);
		}

		&:hover {
			background-image: linear-gradient(rgba(0, 0, 0, 0.2) 0 0);
		}
		&:active {
			background-image: linear-gradient(rgba(0, 0, 0, 0.3) 0 0);
			transform: translate(var(--box-shadown-size), var(--box-shadown-size));
			box-shadow: none;
		}
		&:disabled {
			@apply cursor-not-allowed opacity-60;
		}
	}
</style>
