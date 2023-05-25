<script lang="ts">
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';

	type Element = $$Generic<'button' | 'a'>;

	interface ButtonComponentElement {
		button: HTMLButtonAttributes;
		a: HTMLAnchorAttributes;
	}

	type $$Props = ButtonComponentElement[Element] & {
		element: Element;
		variant?: 'solid' | 'outline';
		className?: string;
	};

	export let element: Element;
	export let variant: 'solid' | 'outline' = 'solid';
	export let className: string = '';

	let node: HTMLAnchorElement | HTMLButtonElement;

	export function focus() {
		node.focus();
	}
</script>

<svelte:element
	this={element}
	bind:this={node}
	class="btn btn-{variant} {className}"
	on:click
	{...$$restProps}
>
	{#if $$slots.leftIcon}<span class="left-icon"><slot name="leftIcon" /></span>{/if}
	<slot />
	{#if $$slots.rightIcon}<span class="right-icon"><slot name="rightIcon" /></span>{/if}
</svelte:element>

<style lang="scss">
	.btn {
		display: inline-block;
		cursor: pointer;
		padding: 5px 10px;
		text-decoration: none;
		border: 3px solid var(--color-text);

		&.btn-solid {
			background-color: var(--color-text);
			border-color: transparent;
			color: var(--color-text-inverse);
		}
		&.btn-outline {
			background-color: transparent;
			color: var(--color-text);
			border-color: var(--color-text);
		}
		&:disabled {
			opacity: 0.6;
			cursor: not-allowed;
		}
		&:hover {
			&.btn-solid {
				background-image: linear-gradient(rgba(255, 255, 255, 0.2) 0 0);
			}
			&.btn-outline {
				background-image: linear-gradient(rgba(0, 0, 0, 0.2) 0 0);
			}
		}
		&:active {
			&.btn-solid {
				background-image: linear-gradient(rgba(255, 255, 255, 0.4) 0 0);
			}
			&.btn-outline {
				background-image: linear-gradient(rgba(0, 0, 0, 0.4) 0 0);
			}
		}
	}
	.left-icon,
	.right-icon {
		display: inline-block;
		vertical-align: bottom;
	}
	.left-icon {
		margin-right: 5px;
	}
	.right-icon {
		margin-left: 5px;
	}
</style>
