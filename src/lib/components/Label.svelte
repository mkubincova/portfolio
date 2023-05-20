<script lang="ts">
	export let variant: 'colored' | 'dark' | 'light' = 'colored';
	export let className: string = '';
</script>

<div class="label label-{variant} {className}"><slot /></div>

<style lang="scss">
	.label {
		@apply text-xs inline-block bg-gray-200 rounded-sm px-2 py-1;
	}

	.label-colored {
		background-image: linear-gradient(45deg, rgb(240, 169, 148), hsla(50, 75%, 76%, 1));
	}
	.label-light {
		background: var(--color-text-inverse);
	}
	.label-dark {
		background: var(--color-text);
		color: var(--color-text-inverse);
	}
</style>
