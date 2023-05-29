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
	class="icon-btn {className}"
	on:click
	{...$$restProps}
>
	<slot />
</svelte:element>

<style lang="scss">
	.icon-btn {
		--box-shadown-size: 3px;
		@apply inline-flex cursor-pointer p-2.5 no-underline rounded-md border-current border-3 bg-[var(--bg-color)];
		box-shadow: var(--box-shadown-size) var(--box-shadown-size) 0px var(--color-text);

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
