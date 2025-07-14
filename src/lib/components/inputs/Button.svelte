<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	interface Props {
		props?: HTMLButtonAttributes;
		className?: string;
		children: Snippet<[]>;
	}

	let { props, children, className }: Props = $props();
</script>

<button class={'font-semibold hover:cursor-pointer' + ` ${className}`} {...props}>
	{@render children()}
</button>
